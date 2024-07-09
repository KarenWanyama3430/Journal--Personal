const { Router } = require('express');
const bcrypt = require('bcryptjs');
const { authMiddleware } = require('../middleware/auth');
const { User } = require('../entity/User');

const router = Router();
router.use(authMiddleware);

router.put('/', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne(req.user.id);
  if (username) user.username = username;
  if (password) user.password = await bcrypt.hash(password, 10);
  await user.save();
  res.json({ user });
});

module.exports = router;
