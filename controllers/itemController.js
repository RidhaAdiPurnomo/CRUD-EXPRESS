const localStorage = require("../models/localStorage");

const createItem = (req, res) => {
  const { id, name } = req.body;
  if (!id || !name) {
    return res.status(400).json({ message: "ID dan Nama wajib diisi." });
  }
  localStorage.push({ id, name });
  res.status(201).json({ message: "Item berhasil ditambahkan.", item: { id, name } });
};

const getItems = (req, res) => {
  res.status(200).json({ items: localStorage });
};

const updateItem = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const itemIndex = localStorage.findIndex((item) => item.id === id);
  if (itemIndex === -1) {
    return res.status(404).json({ message: "Item tidak ditemukan." });
  }

  localStorage[itemIndex].name = name || localStorage[itemIndex].name;
  res.status(200).json({ message: "Item berhasil diperbarui.", item: localStorage[itemIndex] });
};

const deleteItem = (req, res) => {
  const { id } = req.params;

  const itemIndex = localStorage.findIndex((item) => item.id === id);
  if (itemIndex === -1) {
    return res.status(404).json({ message: "Item tidak ditemukan." });
  }

  const deletedItem = localStorage.splice(itemIndex, 1);
  res.status(200).json({ message: "Item berhasil dihapus.", item: deletedItem });
};

module.exports = {
  createItem,
  getItems,
  updateItem,
  deleteItem,
};
