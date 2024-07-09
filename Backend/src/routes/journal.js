const { Router } = require('express');
const { Journal } = require('../entity/Journal');
const { authMiddleware } = require('../middleware/auth');

const router = Router();
router.use(authMiddleware);

router.get('/', async (req, res) => {
  const journals = await Journal.find({ where: { user: req.user } });
  res.json(journals);
});

router.post('/', async (req, res) => {
  const { title, content, category, date } = req.body;
  const journal = Journal.create({ title, content, category, date, user: req.user });
  await journal.save();
  res.json(journal);
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { title, content, category, date } = req.body;
  const journal = await Journal.findOne({ where: { id, user: req.user } });
  if (!journal) return res.status(404).json({ message: 'Journal not found' });
  journal.title = title;
  journal.content = content;
  journal.category = category;
  journal.date = date;
  await journal.save();
  res.json(journal);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const journal = await Journal.findOne({ where: { id, user: req.user } });
  if (!journal) return res.status(404).json({ message: 'Journal not found' });
  await journal.remove();
  res.json({ message: 'Journal deleted' });
});

module.exports = router;
