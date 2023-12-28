import food from "../modals/foodModal.js";

//list foods

export const getListFoods = async (req, res) => {

  try {
    const ListFoods = await food.find();
    res.status(200).json(ListFoods)

  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

// Create new food 

// export const createFood = async (req, res) => {

//   const getfood = {
//     name: req.body.name,
//     ingredients: req.body.ingredients,
//     description: req.body.description,
//   }
//   try {
//     const savedFood = new food(getfood)
//     const ajoutFood = await savedFood.save();
//     res.status(200).json(ajoutFood);

//   } catch (error) {
//     res.status(500).json((` error : ${error}`));
//   }
// };


export const createFood = async (req, res) => {
  try {
    const food1 = new food(req.body);
    await food1.save();
    res.status(201).json(food1);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//get one food 

export const getFoodById = async (req, res) => {
  try {
    const id = req.params.id
    const getOneFood = await food.findById(id);
    res.status(200).json(getOneFood);
  } catch (error) {
    res.status(500).json((` error : ${error}`));
  }
}

//update 

export const updateFood = async (req, res) => {
  const id = req.params.id
  const updatedFood = req.body;
  try {
    const getFood = await food.findById(id)
    if (!getFood) {
      res.status(404).json("cannot find this ID");
    } else {
      await food.findByIdAndUpdate(id, updatedFood);
      res.status(200).json("updated");
    }
  } catch (error) {
    res.status(500).json({ error: 'error' });
  }

}

//delete

export const deletefood = async (req, res) => {
  const id = req.params.id
  try {
    await food.findByIdAndDelete(id);
    res.status(200).json("deleted");
  } catch (error) {
    res.status(500).json(` error : ${error}`);
  }
};
