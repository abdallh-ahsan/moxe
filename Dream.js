client.on('message', message => {
    var prefix = "-";
    
        if (message.author.id === client.user.id) return;
        if (message.guild) {
       let embed = new Discord.RichEmbed()
        let args = message.content.split(' ').slice(1).join(' ');
    if(message.content.split(' ')[0] == prefix + 'bc') {
        if (!args[1]) {
    message.channel.send("**f!bc <message>**");
    return;
    }
            message.guild.members.forEach(m => {
       if(!message.member.hasPermission('ADMINISTRATOR')) return;
                var bc = new Discord.RichEmbed()
                .addField('» السيرفر :', `${message.guild.name}`)
                .addField('» المرسل : ', `${message.author.username}#${message.author.discriminator}`)
                .addField(' » الرسالة : ', args)
                .setColor('#ff0000')
                // m.send(`[${m}]`);
                m.send(`${m}`,{embed: bc});
            });
        }
        } else {
            return;
        }
    });
client.on('message', message => {
              var prefix = "-" ;
            if (message.content.startsWith(prefix + "help")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)   
.addField('     **─════════════ ⦁{✯الاوامر العامة✯}⦁ ════════════─** ' ,' **   ** ')
.addField('     **→ معلومات حسابك ←** ' ,' **-id** ')
.addField('     **→ سرعة استجابة البوت ←**  ' ,' **-ping** ')
.addField('     **→ للحصول علي رابط البوت ←**  ' ,' **-invite** ')
.addField('     **→ معلومات البوت ←** ' , '**-bot-info**') 
.addField('     **→ لمعلومات الروم←** ' , '**-ch**') 
.addField('     **→الافتار ←** ' ,' ** -avatar**')
.addField('     **→ تاريخ اليوم←** ' , '**-date**')
.addField('     **→ معلومات السيرفر ← ** ' ,' **  -server-info  ** ')
.addField('     **→ لمعرفة حالة الاعضاء ← ** ' ,' **  -members  ** ')
.addField('     **─════════════ ⦁{✯الالعاب✯}⦁ ════════════─** ' ,' **   ** ')
.addField('     **→ انجازات ماين كرافت ←  ** ' ,' **  $angaz ** ')
.addField('     ** → كتابة كلام مثل كلايد بوت ←  ** ' ,' **  $s ** ')
.addField('     ** → الزواج (مزحة) من الشخص ←  ** ' ,' **  $marry ** ')
.addField('     ** → حجر ورق مقص ←  ** ' ,' **  $rps ** ')
.addField('     **─════════════ ⦁{✯اوامر الادارة✯}⦁ ════════════─** ' ,' **   ** ')
.addField('     ** → اععطاء العضو باند ←  ** ' ,' **  -ban ** ')
.addField('     ** → طرد العضو من السيرفر ←  ** ' ,' **  -kick ** ')
.addField('     ** → مسح الشات ←  ** ' ,' **  -clear ** ')


.setColor('RANDOM')
  message.author.sendEmbed(embed);
    }
});
client.on('message', message => { //by Aleto
 if (message.content.startsWith("-server")) { //by Aleto
 let embed = new Discord.RichEmbed() //by Aleto
.setAuthor(message.author.username, message.guild.iconrURL) //by Aleto
 .addField('**====>   معلومات السيرفر   <====**') //by Aleto
.addField('اسم السيرفر | :checkered_flag:',`**[ ${message.guild.name} ]**`) //by Aleto
.addField('عدد اعضاء السيرفر | :bust_in_silhouette:',`**[ ${client.users.size} ]**`) //by Aleto
.addField('عدد بوتات السيرفر | :robot:',`**[ ${message.guild.members.filter(m=>m.user.bot).size} ]**`) //by Aleto
.addField('عدد رومات السيرفر | :books:',`**[ ${message.guild.channels.size} ]**`) //by Aleto
.addField("**عدد رتب السيرفر | :closed_lock_with_key:**",`**[ ${message.guild.roles.size} ]**`) //by Aleto
.setColor('RANDOM') //by Aleto
  message.channel.sendEmbed(embed); //by Aleto
    } //by Aleto
}); //by Aleto
client.on("message", message => {
var prefix = "-" // البريفكس
    var args = message.content.substring(prefix.length).split(" ");
    if (message.content.startsWith(prefix + "clear")) { // الامر
        if(!message.channel.guild) return message.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**⚠  لا يوجد لديك صلاحية لمسح الشات**');
var msg;
msg = parseInt();

message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
message.channel.sendMessage("", {embed: {
title: "``تــم مسح الشات ``",
color: 0x06DF00,
footer: {
  
}
}}).then(msg => {msg.delete(3000)});
                  }


});
client.on("message", (message) => {
    if (message.content.startsWith('dr')) {
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");

        let args = message.content.split(' ').slice(1);
        let channel = message.client.channels.find('name', args.join(' '));
        if (!channel) return message.reply('**There is no room like this name -_-**').catch(console.error);
        channel.delete()
    }
});
client.on('message', function(message) {
    if (!message.member.hasPermissions(['ADMINISTRATOR'])){
            let command = message.content.split(" ")[0];
        if(message.content.includes('discord.gg')){
        message.reply (' ')
           if(!message.channel.guild) return message.reply('** This command only for servers**');
     message.member.addRole(message.guild.roles.find('name', 'Muted')); 
    const embed500 = new Discord.RichEmbed()
      .setTitle(":x: | تمت معاقبتك")
            .addField(`** لقد قمت بمخالفة قوانين السيرفر من خلال نشر سيرفرات اخرى  **` , `**ان كأن هاذه الميوت عن طريق الخطأ تواصل مع احد اعضاء الادارة**`)
      .addField(`Dream`,`CopyRight`)
            .setColor("c91616")
            .setThumbnail(`${message.author.avatarURL}`)
            .setAuthor(message.author.username, message.author.avatarURL) 
        .setFooter(`${message.guild.name} Server`)
     message.channel.send(embed500) 
    
        
    }
    }
})
client.on('message', message => { 
    var prefix = "-";
    if (message.author.boss) return;
    if (!message.content.startsWith(prefix)) return;
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
    if (command == "Roleadd") {
    if (!message.channel.guild) return;
    if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.reply("**:no_entry_sign:انت لا تملك صلاحيات **").then(msg => msg.delete(5000));;
    if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("البوت لايملك صلاحيات ").then(msg => msg.delete(5000));;
    let user = message.mentions.users.first();
    if (message.mentions.users.size < 1) return message.reply('**ضع منشن الشخص!!**').then(msg => {msg.delete(5000)});
    let MRole = message.content.split(" ").slice(2).join(" ");
    if(!MRole)return message.reply("يجب عليك وضع اسم الرتبة").then(msg => {msg.delete(5000)});
    message.guild.member(user).addRole(message.guild.roles.find("name", MRole));
    message.reply('*** Done :white_check_mark:  ***').then(msg => {msg.delete(10000)});
    }
    });
client.on('message', message => {
    if (message.content.startsWith("رابط")) {

  message.channel.createInvite({
        thing: true,
        maxUses: 100,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription("| :white_check_mark:  | :heart:  تم ارسال الرابط على الخاص  ")
      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
                .setAuthor(message.guild.name, message.guild.iconURL)
        .setDescription(`
**
---------------------
-[${message.guild.name}]  هذا هو رابط سيرفر
---------------------
-هذا الرابط صالح ل 100 مستخدم فقط
---------------------
-هذا الرابط صالح لمده 24 ساعه فقط
---------------------
**`)
      message.author.sendEmbed(Embed11)
    }
});
client.on('message', msg => {
if(msg.content === ' سلام عليكم  ') {
msg.reply('وعليكمم السلام');
if(msg.content === ' هلا  ') {
msg.reply('هلا فيك');
}
});
client.on('guildMemberAdd', member => {
    var embed = new Discord.RichEmbed()
    .setThumbnail(member.user.avatarURL)
  .addField("***شكرا الانضمامك الينا***" ,member.user.username )
    .setDescription('***بكل حب واحترام وشوق نستقبلك ونتمنى لك قضآء أجمل اللحظات ولآوقات معنا***')
    .setColor('RANDOM')
    .setImage('http://www.imgion.com/images/01/Welcome-buddy.jpg')
var channel =member.guild.channels.find('name', 'chat-arabjoker')
if (!channel) return;
channel.send({embed : embed});
});
client.on('message', message => {

    if(message.content === prefix + "f!mutechannel") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("**__تم تقفيل الشات__ :white_check_mark: **")
           });
             }
//FIRE BOT
 if(message.content === prefix + "f!unmutechannel") {
                     if(!message.channel.guild) return message.reply('** This command only for servers**');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply("**__تم فتح الشات__:white_check_mark:**")
           });
             }
             
      
    
});
client.login(BOT_TOKEN);
