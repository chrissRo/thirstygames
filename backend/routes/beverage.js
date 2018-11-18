let express = require('express');
let router = express.Router();
let beverageController = require("../controllers/beverageController");

/*
    ALL BEVERAGES
*/

router.get('/', beverageController.all_beverages_get);
router.delete('/', beverageController.all_beverages_delete);

/*
    SINGLE BEVERAGE
 */
router.get('/:beverage_id', beverageController.single_beverage_get);
router.delete('/:beverage_id', beverageController.single_beverage_delete);
/*
router.get('/:id', beverageController.single_beverage_get);
router.post('/:id', beverageController.single_beverage_post);
router.put('/:id', beverageController.single_beverage_put);
router.delete('/:id', beverageController.single_beverage_delete);
*/

module.exports = router;
