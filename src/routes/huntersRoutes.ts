import { Router } from "express";
import { HunterController } from "../controllers/hunterController";

const router = Router();
const controller = new HunterController();

/**
 * @swagger
 * /api/hunters:
 *   get:
 *     summary: Get all hunters
 *     tags: [Hunters]
 *     responses:
 *       200:
 *         description: List of all hunters
 */
router.get("/", controller.getAllHunters);

/**
 * @swagger
 * /api/hunters/{id}:
 *   get:
 *     summary: Get a hunter by ID
 *     tags: [Hunters]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Hunter details
 *       404:
 *         description: Hunter not found
 */
router.get("/:id", controller.getHunterById);

/**
 * @swagger
 * /api/hunters/nen/{type}:
 *   get:
 *     summary: Get hunters by Nen type
 *     tags: [Hunters]
 *     parameters:
 *       - in: path
 *         name: type
 *         required: true
 *         schema:
 *           type: string
 *         description: The Nen type to filter by (e.g., Enhancement, Transmutation)
 *     responses:
 *       200:
 *         description: List of hunters of specified Nen type
 *       404:
 *         description: No hunters found with this Nen type
 */
router.get("/nen/:type", controller.getHuntersByNenType);

/**
 * @swagger
 * /api/hunters/{id}/abilities:
 *   get:
 *     summary: Get hunter abilities
 *     tags: [Hunters]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Hunter abilities
 *       404:
 *         description: Hunter not found
 */
router.get("/:id/abilities", controller.getHunterAbilities);

export default router;
