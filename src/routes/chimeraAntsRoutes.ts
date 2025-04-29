import { Router } from "express";
import { ChimeraAntsController } from "../controllers/chimeraAntsController";

const router = Router();
const controller = new ChimeraAntsController();

/**
 * @swagger
 * /api/chimera-ants:
 *   get:
 *     summary: Get all Chimera Ants
 *     tags: [Chimera Ants]
 *     responses:
 *       200:
 *         description: List of all Chimera Ants
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ChimeraAnt' # Reference schema
 */
router.get("/", controller.getAllChimeraAnts);

/**
 * @swagger
 * /api/chimera-ants/{id}:
 *   get:
 *     summary: Get a Chimera Ant by ID
 *     tags: [Chimera Ants]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the Chimera Ant
 *     responses:
 *       200:
 *         description: Chimera Ant details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ChimeraAnt' # Reference schema
 *       404:
 *         description: Chimera Ant not found
 */
router.get("/:id", controller.getChimeraAntById);

export default router;
