
# Active Developer Badge
Discord just launched the new "Active Developer" badge and they're encouraging new developers to join the community and get it.
If you're still learning and want the badge, follow the instructions below!




--------------------------------------

![image](https://i.imgur.com/z6jzw4C.png)

--------------------------------------



# Instructions

- Go to https://discord.com/developers/applications, and create a new application on the account you want the badge on.
- Go to the bot tab and generate a bot account for the application.
- Click the "Reset Token" button to generate a token (if you have 2fa enabled, you'll need your code).
- Copy the token to your clipboard.
- Click this badge to clone this repo to a new repl in Replit -> [![Run on Repl.it](https://replit.com/badge/github/hackermondev/discord-active-developer-badge)](https://replit.com/new/github/hackermondev/discord-active-developer-badge)
  - You will be redirected to Replit, you might have to create an account (you can Register with Google).
    - Replit is a website, and does not run off your computer! 
- Wait for the repo has finished cloning and the repl to fully connect.
- Click the green "Run" button at the top.
- Go to the console (big black square on the right) and paste in the token you copied earlier (**Note**: ``CTRL + V`` won't work, you'll need to do ``CTRL + Shift + V`` or right-click and click paste).
- Press the 'Enter' key.
- Wait for it to print 'DONE | Application/Bot is up and running. DO NOT CLOSE THIS TAB UNLESS YOU ARE FINISHED USING THE BOT, IT WILL PUT THE BOT OFFLINE.' in the console, **DON'T STOP THE PROGRAM OR CLOSE THE TAB YET OR THE BOT WILL CONSIDERED BY DISCORD AS 'UNRESPONSIVE'**
- Go back to the application page, go to the "General Information" tab, scroll down and copy application id.
- Create a new discord server (you can delete it at the end).
- Enable community on the server (you only need to do this if you don't own any other discord server with community enabled)
- Return back to https://discord.com/developers/applications.
- Copy the application id.
- Use this invite link to add the application to the server: (replace ``{applicationid}`` with what you copied) ``https://discord.com/oauth2/authorize?client_id={applicationid}&scope=bot%20applications.commands&permissions=105227086912``
- In the server, go to a channel and use the ``/ping`` command on the bot.
- Go to the <https://discord.com/developers/active-developer> page and register everything (**if it says you're not eligible, it's because you're not registered in their system yet. you might have to wait up to 24 hours**).
- Congrats on that shiny new badge.


**NOTE:** Make sure you have the “Use data to improve Discord” setting enabled under User Settings > Privacy & Safety otherwise you won't be able to be marked as eligible.

**NOTE 2:** You do not need to keep the Replit tab open 24/7. Only go to the Replit url whenever you want to run your bot.

If you're encountering any issues, [create a new GitHub issue](https://github.com/hackermondev/discord-active-developer/issues) or join [this](https://discord.gg/M5MSE9CvNM) server and ping me in the `#general` channel.


--------------------------------------
# Sponsored by **SkySilk**
![image](https://user-images.githubusercontent.com/60828015/221383603-31059a63-17bd-44d7-a1c6-8bde84faaf14.png)

SkySilk is the #1 VPS hosting solution for Discord bots, website, and more. 

Choose from dozens of Linux apps & clean OS installs to deploy in seconds with just 1-click. Whether you're running a small cloud operation or part of an enterprise-level organization, SkySilk offers over 40 resource plans to ensure you have the right cloud VPS environment suitable for your projects.

### Features
1. Start for $4.00/M: Deploy an SSD cloud server starting at just $4.00/month, scale as you go.
2. Auto Backups & Snapshots: Get peace of mind with automatic weekly cloud backups & snapshots.
3. Flexible Resource Options: A variety of monthly plans to meet any workload and budget.
4. Triple Replicated SSD: Industry leading Infiniband speeds for rapid deployment and optimal I/O.
5. Earn Hosting Rewards: Earn up to 10x SkySilk Rewards points on every transaction and referral, redeemable for Account Credit and other great rewards!
6. Powered by Open Source: Flexibility and compatibility with many familiar and popular Linux-based open source software solutions.
7. Start for Ceph File Storage $4.00/M: Optimized to utilize Ceph storage for no single point of failure.
8. Premium Infrastructure: NVMe SSD Container-based cloud architecture with AMD EPYC 7601 CPU, hosted on a carefully architected Infiniband network.

[Get started now (with free $25 credit to get you started with any product)](https://www.skysilk.com/ref/hdOgCmOaSB)

--------------------------------------


# Star the repo!!!
If you were able to successfully get the badge from this, star this repository so more people can see it and feel free to join our Discord server: https://discord.gg/M5MSE9CvNM

### No, it's not "patched"
I've seen a lot of people say that this method has been patched or something. It's not. It still works (people are still getting the badge from it), if you're unable to get the badge after 24 hours of waiting, you probably didn't follow the instructions correctly.

I think people think this is patched because of NoTextToSpeech's video but that video linked to another repository that works a different way, not this one.
