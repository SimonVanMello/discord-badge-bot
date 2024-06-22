# Active Developer Badge
Discord just launched the new "Active Developer" badge and they're encouraging new developers to join the community and get it.
If you want the badge, follow the instructions below.

---

![image](https://i.imgur.com/z6jzw4C.png)

---

# Instructions

- Clone the repo.
- Go to https://discord.com/developers/applications, and create a new application on the account you want the badge on.
- Go to the bot tab and generate a bot account for the application.
- Click the "Reset Token" button to generate a token (if you have 2fa enabled, you'll need your code).
- Copy the token to the .env file.
- Run the code with `npm start`.
- Go back to the application page, go to the "General Information" tab, scroll down and copy application id.
- Create a new discord server.
- Enable community on the server (you only need to do this if you don't own any other discord server with community enabled)
- Return back to https://discord.com/developers/applications.
- Copy the application id.
- Use this invite link to add the application to the server: (replace ``{applicationid}`` with what you copied) ``https://discord.com/oauth2/authorize?client_id={applicationid}&scope=bot%20applications.commands&permissions=105227086912``
- In the server, go to a channel and use the ``/ping`` command on the bot.
- Go to the <https://discord.com/developers/active-developer> page and register everything (**if it says you're not eligible, it's because you're not registered in their system yet. you might have to wait up to 24 hours**).
- Congrats on that shiny new badge.

**NOTE:** Make sure you have the “Use data to improve Discord” setting enabled under User Settings > Privacy & Safety otherwise you won't be able to be marked as eligible.
