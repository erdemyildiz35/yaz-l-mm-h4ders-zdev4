const mongoose = require("mongoose");

module.exports = {
  connectDb: async () => {
    try {
      await mongoose.connect("mongodb://localhost:27017/urlshortener", {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      });
      console.log("Database bağlantisi başarili");
    } catch (err) {
      console.log(err);
    }
  },
};
