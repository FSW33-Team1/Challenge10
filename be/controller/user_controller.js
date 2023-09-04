const models = require("../models");
module.exports = class UserController {
  //done
  async findUser(req, res) {
    try {
      const id = parseInt(Object.values(req.params));
      const data = await models.User.findOne({ where: { id: id } });

      if (!data) {
        return res.status(404).json({ error: "User not found" });
      }

      const result = {
        status: "ok",
        data: data,
      };
      res.json(result);
    } catch (error) {
      console.log(error);
    }
  }

  //done
  async registerUser(req, res, next) {
    try {
      const { username, password } = req.body;
      const registeredUser = await models.User.findOne({ where: { username: username } });
      if (!username || !password) {
        return res.status(400).send('Username and Password required');
      } else if (registeredUser !== null) {
        res.send('Username taken!')
      } else {
        models.User.create({ username, password: bcrypt.hashSync(password, 8) })
          .then(() => {
            console.log('user created: ' + username)
            res.json(req.body)
          })
          .catch(err => next(err))
      }
    } catch (error) {
      console.log(error);
    }
  }

  //done
  async editUser(req, res) {
    try {
      const { id } = req.params;
      const data = await models.User.findOne({
        where: {
          id: id
        }
      });

      data.email = req.body.email;
      data.username = req.body.username;
      data.total_score = req.body.total_score;
      data.bio = req.body.bio;
      data.city = req.body.city;
      data.social_media_url = req.body.social_media_url;

      await data.save();
      res.json(req.body);

    } catch (error) {
      console.log(error);
    }
  }

  async resetPassword(req, res) {
    try {
      const { id } = req.params;
      const data = await models.User.findOne({
        where: {
          id: id
        }
      });

      data.password = req.body.password;
      res.send('password reset done')
      await data.save();

    } catch (error) {
      console.log(error);
    }
  }

  async addPoint(req, res) {
    try {
      const { id } = req.params;
      const data = await models.User.findOne({
        where: {
          id: id
        }
      });

      data.total_score += 1;

      await data.save();

    } catch (error) {
      console.log(error);
    }
  }

  async showScore(req, res) {
    try {
      const { id } = (req.params);
      const user = await models.User.findOne({ where: { id: id } });

      if (!user) {
        return res.status(404).json({ error: "Game not found" });
      }

      res.json(user.total_score);
    } catch (error) {
      console.log(error);
    }
  }


  // async;
};
