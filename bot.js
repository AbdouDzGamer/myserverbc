client.on('message', message => {
    if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('-bc-all')){
if(!message.author.id === '380827398767378433') return;
message.channel.sendMessage(":0003: | تم ارسال الرسالة")
message.delete();
client.users.forEach(m =>{
m.sendMessage(args)
})///luxy
}
});//LUXY
