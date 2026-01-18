const parsedId = Number(process.env.ID);
module.exports = {
  token: process.env.TOKEN || '8154994898:AAGkCatS_b6KRBiizKiXmKfk4aiioRhfRi4',
  id: isNaN(parsedId) ? 7797948748 : parsedId // replace 12345.. with your telegram chat id
};
