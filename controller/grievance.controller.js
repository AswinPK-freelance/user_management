import Grievance from '../model/grievance.model.js';

export const createGrievance = async (req, res) => {
    const { title, description, type, user } = req.body;

    try {
        const grievance = await Grievance.create({
            title,
            description,
            type,
            user
        });

        res.status(201).json({
            success: true,
            data: grievance,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const fetchAllGrievances = async (req, res) => {
    const { page = 1, limit = 10, userId } = req.query;

    try {
        const filter = { isDeleted: false };
        if (userId) {
            filter.user = userId;
        }

        const grievances = await Grievance.find(filter)
            .populate('user', 'name email profileImage')
            .skip((page - 1) * limit)
            .limit(Number(limit));

        const total = await Grievance.countDocuments(filter);
        const totalPages = Math.ceil(total / limit);
        const hasNextPage = Number(page) < totalPages;
        const hasPrevPage = Number(page) > 1;

        res.status(200).json({
            success: true,
            data: grievances,
            pagination: {
                total,
                page: Number(page),
                pages: totalPages,
                hasNext: hasNextPage,
                hasPrev: hasPrevPage,
            },
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const updateGrievance = async (req, res) => {
    const { id } = req.params;
    const { title, description, type } = req.body;

    try {
        const existingGrievance = await Grievance.findById(id);

        if (existingGrievance?.isDeleted) {
            return res.status(400).json({
                success: false,
                message: 'Grievance is already deleted. You cannot update this.',
            });
        }

        const updatedGrievance = await Grievance.findByIdAndUpdate(
            id,
            { title, description, type },
            { new: true, runValidators: true }
        );

        if (!updatedGrievance) {
            return res.status(404).json({
                success: false,
                message: 'Grievance not found',
            });
        }

        res.status(200).json({
            success: true,
            data: updatedGrievance,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const deleteGrievances = async (req, res) => {
    const { ids } = req.body;

    if (!ids || !Array.isArray(ids) || ids.length === 0) {
        return res.status(400).json({
            success: false,
            message: 'Invalid request: IDs array is required and cannot be empty',
        });
    }

    try {
        await Grievance.updateMany(
            { _id: { $in: ids } },
            { isDeleted: true }
        );

        res.status(200).json({
            success: true,
            message: `Grievances marked as deleted successfully`,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};