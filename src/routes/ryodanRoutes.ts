import { Router } from "express";
import { RyodanController } from "../controllers/ryodanController";

const router = Router();
const controller = new RyodanController();

/**
 * @swagger
 * /api/ryodan:
 *   get:
 *     summary: Get all Ryodan members
 *     tags: [Ryodan]
 *     responses:
 *       200:
 *         description: List of all Ryodan members
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/RyodanMember' # Reference schema (needs definition in swagger.json)
 */
router.get("/", controller.getAllRyodanMembers);

/**
 * @swagger
 * /api/ryodan/{id}:
 *   get:
 *     summary: Get a Ryodan member by ID
 *     tags: [Ryodan]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the Ryodan member
 *     responses:
 *       200:
 *         description: Ryodan member details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RyodanMember' # Reference schema
 *       404:
 *         description: Ryodan member not found
 */
router.get("/:id", controller.getRyodanMemberById);

// Add other routes here if needed (e.g., /nen/:type)

export default router;
