
import authRoutes from "../routes/user.routes.js";
import grievanceRoutes from "../routes/grievance.routes.js";
import { authMiddleware } from "./auth.middleware.js";

function setupRouteHandler(app) {
    app.use(`/auth`, authRoutes);
    app.use(`/grievances`, authMiddleware, grievanceRoutes);
}

export default setupRouteHandler;  
