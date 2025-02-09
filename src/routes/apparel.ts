import { addOrUpdateApparelHandler, addOrUpdateApparelHandlerInBulk } from "../controllers/apparel";

import { Router } from "express";

const apparelRouter = Router()

apparelRouter.put('/update',addOrUpdateApparelHandler)
apparelRouter.put('/update-bulk', addOrUpdateApparelHandlerInBulk)

export default apparelRouter