var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let products = [
    {
      name: "Iphone 11",
      Category: "Mobile",
      Descreption: "Latest Model Iphone",
      Image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-black-select-2019?wid=940&hei=1112&fmt=png-alpha&.v=1566956144418"

    },
    {
      name: "Redmi Note 11",
      Category: "Mobile",
      Descreption: "Latest Model GB RAM",
      Image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-black-select-2019?wid=940&hei=1112&fmt=png-alpha&.v=1566956144418"
    },
    {
      name: "Nothing 11",
      Category: "Mobile",
      Descreption: "Niothing Phone  6 GB RAM",
      Image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-black-select-2019?wid=940&hei=1112&fmt=png-alpha&.v=1566956144418"
    },
    {
      name: "OnePlus 9T",
      Category: "Mobile",
      Descreption: "oneplus 9T  6 GB RAM",
      Image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-black-select-2019?wid=940&hei=1112&fmt=png-alpha&.v=1566956144418"
    }
  ]
  res.render('admin/view-products',{admin:true,products})
});

router.get('/add-products',function(req,res){
res.render('admin/add-products')
});
router.post('/add-products',function(req,res){
  console.log(req.body);
  console.log(req.files.img);
})

module.exports = router;
