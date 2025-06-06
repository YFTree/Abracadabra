/*
 * Copyright (C) 2025 SheepChef (a.k.a. Haruka Hokuto)
 *
 * 这是一个自由软件。
 * 在遵守AIPL-1.1许可证的前提下，
 * 你可以自由复制，修改，分发，使用它。
 *
 * 查阅 Academic Innovation Protection License(AIPL) 来了解更多 .
 * 本作品应随附一份完整的 AIPL-1.1 许可证全文。
 *
 */

/*
 * DISCLAIMER OF UNISHOX2
 *
 * This project uses Unishox2 as a compress library.
 * Some of its code need to be altered in order to achieve certain purposes.
 * Unishox2 was Licensed under the Apache License, Version 2.0.
 * Copyright (C) 2020 Siara Logics (cc)
 *
 * 本作品中包含的 Unishox2 不适用 AIPL-1.1 许可证。
 * 使用 Unishox2 须遵守其原始许可证。
 *
 */

import { Base64 } from "js-base64";
import CryptoJS from "crypto-js";
import pako from "pako";
import * as Unishox from "./unishox2.js";
import "pako";
import MersenneTwister from "mersenne-twister";

const Map =
  '{"basic":{"alphabet":{"a":["请","上","中","之","等","人","到","年","个","将"],"b":["得","可","并","发","过","协","曲","闭","斋","峦"],"c":["页","于","而","被","无","挽","裕","斜","绪","镜"],"d":["由","把","好","从","会","帕","莹","盈","敬","粒"],"e":["的","在","了","是","为","有","和","我","一","与"],"f":["站","最","号","及","能","迟","鸭","呈","玻","据"],"g":["着","很","此","但","看","浩","附","侃","汐","绸"],"h":["名","呢","又","图","啊","棉","畅","蒸","玫","添"],"i":["对","地","您","给","这","下","网","也","来","你"],"j":["更","天","去","用","只","矽","萌","镁","芯","夸"],"k":["第","者","所","两","里","氢","羟","纽","夏","春"],"l":["自","做","前","二","他","氦","汀","兰","竹","捷"],"m":["家","点","路","至","十","锂","羧","暑","夕","振"],"n":["区","想","向","主","四","铍","烃","惠","芳","岩"],"o":["就","新","吗","该","不","多","还","要","让","大"],"p":["小","如","成","位","其","硼","酞","褔","苑","笋"],"q":["吧","每","机","几","总","碳","铂","涓","绣","悦"],"r":["起","它","内","高","次","氮","铵","奏","鲤","淳"],"s":["非","元","类","五","使","氧","醇","迷","霁","琅"],"t":["首","进","即","没","市","氖","酯","琳","绫","濑"],"u":["后","三","本","都","时","月","或","说","已","以"],"v":["种","快","那","篇","万","钠","炔","柯","睿","琼"],"w":["长","按","报","比","信","硅","烷","静","欣","束"],"x":["再","带","才","全","呀","磷","烯","柔","雪","冰"],"y":["业","却","版","美","们","硫","桉","寒","冻","玖"],"z":["像","走","文","各","当","氯","缬","妃","琉","璃"],"A":["贴","则","老","生","达","商","行","周","证","经"],"B":["事","场","同","化","找","建","手","道","间","式"],"C":["特","城","型","定","接","局","问","重","叫","通"],"D":["件","少","面","金","近","买","听","学","见","称"],"E":["写","选","片","体","组","先","仅","别","表","现"],"F":["雨","泊","注","织","赴","茶","因","设","环","青"],"G":["数","心","子","处","作","项","谁","分","转","字"],"H":["砂","妥","鹦","课","栗","霞","鹉","翌","蕴","憩"],"I":["畔","珑","咫","瑞","玲","郊","蛟","昱","祉","菁"],"J":["铁","宙","耕","琴","铃","瑰","旬","茉","砺","莅"],"K":["钇","莉","筱","森","曳","苹","踵","晰","砥","舀"],"L":["锆","粟","魄","辉","谜","馅","醋","甄","韶","泪"],"M":["钌","倘","祥","善","泉","惦","铠","骏","韵","泣"],"N":["铑","筑","铿","智","禀","磊","桨","檀","荧","铭"],"O":["钯","骐","烛","蔬","凛","溯","困","炯","酿","瑕"],"P":["银","榻","驿","缎","澟","绒","莺","萤","桅","枕"],"Q":["镉","赞","瑾","程","怡","漱","穗","湍","栀","皆"],"R":["碘","礼","饴","舒","芷","麟","沥","描","锄","墩"],"S":["锡","彰","瞻","雅","贮","喵","翊","闪","翎","婉"],"T":["钨","咨","涌","益","嵩","御","饶","纺","栩","稔"],"U":["铋","骆","橘","未","泰","频","琥","囍","浣","裳"],"V":["钕","飒","浇","哦","途","瓢","珀","涨","仓","棠"],"W":["祁","蓬","灿","部","涧","舫","曙","航","礁","渡"],"X":["旺","嫦","漫","佑","钥","谧","葵","咩","诵","绮"],"Y":["阐","译","锻","茜","坞","砌","靛","猫","芮","绚"],"Z":["拌","皎","笙","沃","悟","拓","遨","揽","昼","蔗"]},"numbersymbol":{"0":["卡","风","水","放","花","钾","宏","谊","探","棋"],"1":["需","头","话","曾","楼","钙","吾","恋","菲","遥"],"2":["连","系","门","力","量","钛","苗","氛","鹤","雀"],"3":["书","亿","跟","深","方","钒","鸳","鸯","纸","鸢"],"4":["若","低","谈","明","百","铬","羯","尧","舜","兆"],"5":["关","客","读","双","回","锰","熙","瀚","渊","灯"],"6":["较","品","嘛","单","价","钴","阑","珊","雁","鹂"],"7":["山","西","动","厂","热","锌","鹃","鸠","昆","仑"],"8":["言","笑","度","易","身","镓","乾","坤","澈","饺"],"9":["份","星","千","仍","办","锗","彗","聪","慧","磋"],"+":["集","费","传","室","拉"],"/":["难","界","指","管","具"],"?":["相","儿","李","早","拿"],"-":["科","白","段","飞","住"],".":["利","红","板","光","约"],"(":["变","款","林","夹","院"],")":["服","句","声","务","游"],"[":["股","南","社","阿","远"],"]":["意","换","些","必","赛"],"<":["届","完","乐","彩","讲"],">":["展","帮","且","物","班"],",":["何","流","密","某","房"],"|":["语","亚","常","除","装"],"=":["极","载","题","刚","气"],"@":["米","影","德","世","坐"],"#":["北","招","短","活","斯"],"!":["值","店","树","哪","余"],"~":["盘","速","座","求","创"],"`":["梦","足","半","视","安"],"$":["空","歌","派","顶","登"],"%":["夜","云","感","啦","欲"],"^":["边","工","眼","街","奖"],"&":["获","占","理","任","实"],"*":["知","掉","色","讯","克"],"_":["直","评","往","层","园"],"{":["留","靠","亦","罗","营"],"}":["合","尚","产","诚","汨"],":":["曱","朩","杉","杸","歩"],";":["毋","氕","気","氘","氙"]}},"special":{"DECRYPT":{"JP":["桜","込","凪","雫","実","沢"],"CN":["玚","俟","玊","欤","瞐","珏"]}}}';

var RoundFlip = 0; //标志现在到哪了
var RoundControl = new Uint8Array(32); //一个数组，用密钥哈希来控制轮转的行为
const Normal_Characters =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+=_-/?.>,<|`~!@#$%^&*(){}[];:1234567890"; //表内有映射的所有字符组成的字符串
const LETTERS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var LETTERS_ROUND_1 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var LETTERS_ROUND_2 = "FbPoDRStyJKAUcdahfVXlqwnOGpHZejzvmrBCigQILxkYMuWTEsN"; //手动随机打乱的乱序轮
var LETTERS_ROUND_3 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const BIG_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const NUMBERS = "1234567890";
const SYMBOLS = "+=_-/?.>,<|`~!@#$%^&*(){}[];:";
const NUMBERSYMBOL = "1234567890+=_-/?.>,<|`~!@#$%^&*(){}[];:";
var NUMBERSYMBOL_ROUND_1 = "1234567890+=_-/?.>,<|`~!@#$%^&*(){}[];:";
var NUMBERSYMBOL_ROUND_2 = "~3{8}_-$[6(2^&#5|1*%0,<9:`+@7/?.>4=];!)"; //手动随机打乱的乱序轮
var NUMBERSYMBOL_ROUND_3 = "1234567890+=_-/?.>,<|`~!@#$%^&*(){}[];:";

const SIG_DECRYPT_JP = "桜込凪雫実沢";
const SIG_DECRYPT_CN = "玚俟玊欤瞐珏";
const NULL_STR = "孎"; //默认忽略的占位字符，一个生僻字。

var MT = new MersenneTwister(Date.now());

const CHINESE_WEBPAN_LIB = [
  "https://",
  "lanzou",
  "pan.quark.cn",
  "pan.baidu.com",
  "aliyundrive.com",
  "123pan.com",
];
const INTER_WEBPAN_LIB = [
  "https://",
  "mypikpak.com",
  "mega.nz",
  "drive.google.com",
  "sharepoint.com",
  "1drv.ms",
];
const CHINESE_WEBSITE_LIB = [
  "https://",
  "baidu.com",
  "b23.tv",
  "bilibili.com",
  "weibo.com",
  "weixin.qq.com",
];
const INTER_WEBSITE_LIB = [
  "https://",
  "google.com",
  "youtube.com",
  "x.com",
  "twitter.com",
  "telegra.ph",
];
const INTER_WEBSITE_LIB_2 = [
  "https://",
  "wikipedia.org",
  "github.com",
  "pages.dev",
  "github.io",
  "netlify.app",
];
const JAPAN_WEBSITE_LIB = [
  "https://",
  "pixiv.net",
  "nicovideo.jp",
  "dlsite.com",
  "line.me",
  "dmm.com",
];
const PIRACY_WEBSITE_LIB = [
  "https://",
  "nyaa.si",
  "bangumi.moe",
  "thepiratebay.org",
  "e-hentai.org",
  "exhentai.org",
];
const GENERIC_TLINK_LIB = [
  "https://",
  "magnet:?xt=urn:btih:",
  "magnet:?xt=urn:sha1:",
  "ed2k://",
  "thunder://",
  "torrent",
];
const GENERIC_LINK_LIB_1 = ["https://", ".cn", ".com", ".net", ".org", ".xyz"];
const GENERIC_LINK_LIB_2 = ["https://", ".info", ".moe", ".cc", ".co", ".dev"];
const GENERIC_LINK_LIB_3 = ["https://", ".io", ".us", ".eu", ".jp", ".de"];

const Map_Obj = JSON.parse(Map);

function AES_256_CTR_E(Uint8attr, key, RandomBytes) {
  let KeyHash = CryptoJS.SHA256(key);
  let HashArray = wordArrayToUint8Array(KeyHash);

  let TempArray = new Uint8Array(HashArray.byteLength + 2);
  TempArray.set(HashArray, 0);
  TempArray.set([RandomBytes[0], RandomBytes[1]], HashArray.byteLength);
  HashArray = TempArray;

  let HashWithRandom = CryptoJS.lib.WordArray.create(HashArray);
  let KeyHashHash = CryptoJS.SHA256(HashWithRandom); //密钥两次哈希,附加两字节随机数
  let HashHashArray = wordArrayToUint8Array(KeyHashHash);

  let ivArray = new Uint8Array(16);

  for (var i = 0; i < 16; i++) {
    ivArray[i] = HashHashArray[i];
  }

  let iv = CryptoJS.lib.WordArray.create(ivArray);
  let msg = CryptoJS.lib.WordArray.create(Uint8attr);

  let Enc = CryptoJS.AES.encrypt(msg, KeyHash, {
    mode: CryptoJS.mode.CTR,
    padding: CryptoJS.pad.NoPadding,
    iv: iv,
  });
  return wordArrayToUint8Array(Enc.ciphertext);
}

function GZIP_COMPRESS(Data) {
  let DataOutput = pako.gzip(Data);

  if (DataOutput.byteLength >= Data.byteLength) {
    return Data;
  }
  return DataOutput;
}
function GZIP_DECOMPRESS(Data) {
  const firstTwoBytes = new Uint8Array(Data.buffer, 0, 2);
  if (firstTwoBytes[0] === 0x1f && firstTwoBytes[1] === 0x8b) {
    // Likely compressed with gzip
    let DataOutput = pako.ungzip(Data);
    return DataOutput;
  } else {
    return Data;
  }
}
function UNISHOX_COMPRESS(Data) {
  let CompressedStrCharArray = new Uint8Array(2048);
  let Datastr = Uint8ArrayTostring(Data);
  let libmark = 255;

  for (let i = 1; i < 6; i++) {
    if (Datastr.indexOf(CHINESE_WEBPAN_LIB[i]) != -1) {
      libmark = 254;
      break;
    }
    if (Datastr.indexOf(INTER_WEBPAN_LIB[i]) != -1) {
      libmark = 245;
      break;
    }
  }
  if (libmark == 255) {
    for (let i = 1; i < 6; i++) {
      if (Datastr.indexOf(CHINESE_WEBSITE_LIB[i]) != -1) {
        libmark = 253;
        break;
      }
      if (Datastr.indexOf(INTER_WEBSITE_LIB[i]) != -1) {
        libmark = 252;
        break;
      }
      if (Datastr.indexOf(INTER_WEBSITE_LIB_2[i]) != -1) {
        libmark = 244;
        break;
      }
      if (Datastr.indexOf(JAPAN_WEBSITE_LIB[i]) != -1) {
        libmark = 251;
        break;
      }
      if (Datastr.indexOf(PIRACY_WEBSITE_LIB[i]) != -1) {
        libmark = 250;
        break;
      }
    }
  }
  if (libmark == 255) {
    for (let i = 1; i < 6; i++) {
      if (Datastr.indexOf(GENERIC_TLINK_LIB[i]) != -1) {
        libmark = 249;
        break;
      }
      if (Datastr.indexOf(GENERIC_LINK_LIB_1[i]) != -1) {
        libmark = 248;
        break;
      }
      if (Datastr.indexOf(GENERIC_LINK_LIB_2[i]) != -1) {
        libmark = 247;
        break;
      }
      if (Datastr.indexOf(GENERIC_LINK_LIB_3[i]) != -1) {
        libmark = 246;
        break;
      }
    }
  }

  let Outlen;
  switch (libmark) {
    case 255:
      Outlen = Unishox.unishox2_compress_simple(
        Data,
        Data.byteLength,
        CompressedStrCharArray
      );
      break;
    case 254:
      Outlen = Unishox.unishox2_compress_simple(
        Data,
        Data.byteLength,
        CompressedStrCharArray,
        CHINESE_WEBPAN_LIB
      );
      break;
    case 245:
      Outlen = Unishox.unishox2_compress_simple(
        Data,
        Data.byteLength,
        CompressedStrCharArray,
        INTER_WEBPAN_LIB
      );
      break;
    case 253:
      Outlen = Unishox.unishox2_compress_simple(
        Data,
        Data.byteLength,
        CompressedStrCharArray,
        CHINESE_WEBSITE_LIB
      );
      break;
    case 252:
      Outlen = Unishox.unishox2_compress_simple(
        Data,
        Data.byteLength,
        CompressedStrCharArray,
        INTER_WEBSITE_LIB
      );
      break;
    case 244:
      Outlen = Unishox.unishox2_compress_simple(
        Data,
        Data.byteLength,
        CompressedStrCharArray,
        INTER_WEBSITE_LIB_2
      );
      break;
    case 251:
      Outlen = Unishox.unishox2_compress_simple(
        Data,
        Data.byteLength,
        CompressedStrCharArray,
        JAPAN_WEBSITE_LIB
      );
      break;
    case 250:
      Outlen = Unishox.unishox2_compress_simple(
        Data,
        Data.byteLength,
        CompressedStrCharArray,
        PIRACY_WEBSITE_LIB
      );
      break;
    case 249:
      Outlen = Unishox.unishox2_compress_simple(
        Data,
        Data.byteLength,
        CompressedStrCharArray,
        GENERIC_TLINK_LIB
      );
      break;
    case 248:
      Outlen = Unishox.unishox2_compress_simple(
        Data,
        Data.byteLength,
        CompressedStrCharArray,
        GENERIC_LINK_LIB_1
      );
      break;
    case 247:
      Outlen = Unishox.unishox2_compress_simple(
        Data,
        Data.byteLength,
        CompressedStrCharArray,
        GENERIC_LINK_LIB_2
      );
      break;
    case 246:
      Outlen = Unishox.unishox2_compress_simple(
        Data,
        Data.byteLength,
        CompressedStrCharArray,
        GENERIC_LINK_LIB_3
      );
      break;
  }

  let ResStrCharArray = CompressedStrCharArray.subarray(0, Outlen);
  if (ResStrCharArray.byteLength >= Data.byteLength) {
    return Data;
  }

  let TempArray = new Uint8Array(ResStrCharArray.byteLength + 2);
  TempArray.set(ResStrCharArray, 0);
  TempArray.set([libmark, 255], ResStrCharArray.byteLength);
  ResStrCharArray = TempArray;

  return ResStrCharArray;
}
function UNISHOX_DECOMPRESS(Data) {
  const lastElement = Data[Data.byteLength - 1];
  const secondLastElement = Data[Data.byteLength - 2];

  if (
    lastElement != 255 ||
    secondLastElement < 244 ||
    secondLastElement > 255
  ) {
    return Data;
  }
  let libmark = secondLastElement;
  let NewData = Data.subarray(0, Data.byteLength - 2);

  let DecompressedStrCharArray = new Uint8Array(2048);

  let Outlen;
  switch (libmark) {
    case 255:
      Outlen = Unishox.unishox2_decompress(
        NewData,
        NewData.byteLength,
        DecompressedStrCharArray,
        Unishox.USX_HCODES_DFLT,
        Unishox.USX_HCODE_LENS_DFLT,
        Unishox.USX_FREQ_SEQ_DFLT,
        Unishox.USX_TEMPLATES
      );
      break;
    case 254:
      Outlen = Unishox.unishox2_decompress(
        NewData,
        NewData.byteLength,
        DecompressedStrCharArray,
        Unishox.USX_HCODES_DFLT,
        Unishox.USX_HCODE_LENS_DFLT,
        CHINESE_WEBPAN_LIB,
        Unishox.USX_TEMPLATES
      );
      break;
    case 245:
      Outlen = Unishox.unishox2_decompress(
        NewData,
        NewData.byteLength,
        DecompressedStrCharArray,
        Unishox.USX_HCODES_DFLT,
        Unishox.USX_HCODE_LENS_DFLT,
        INTER_WEBPAN_LIB,
        Unishox.USX_TEMPLATES
      );
      break;
    case 253:
      Outlen = Unishox.unishox2_decompress(
        NewData,
        NewData.byteLength,
        DecompressedStrCharArray,
        Unishox.USX_HCODES_DFLT,
        Unishox.USX_HCODE_LENS_DFLT,
        CHINESE_WEBSITE_LIB,
        Unishox.USX_TEMPLATES
      );
      break;
    case 252:
      Outlen = Unishox.unishox2_decompress(
        NewData,
        NewData.byteLength,
        DecompressedStrCharArray,
        Unishox.USX_HCODES_DFLT,
        Unishox.USX_HCODE_LENS_DFLT,
        INTER_WEBSITE_LIB,
        Unishox.USX_TEMPLATES
      );
      break;
    case 244:
      Outlen = Unishox.unishox2_decompress(
        NewData,
        NewData.byteLength,
        DecompressedStrCharArray,
        Unishox.USX_HCODES_DFLT,
        Unishox.USX_HCODE_LENS_DFLT,
        INTER_WEBSITE_LIB_2,
        Unishox.USX_TEMPLATES
      );
      break;
    case 251:
      Outlen = Unishox.unishox2_decompress(
        NewData,
        NewData.byteLength,
        DecompressedStrCharArray,
        Unishox.USX_HCODES_DFLT,
        Unishox.USX_HCODE_LENS_DFLT,
        JAPAN_WEBSITE_LIB,
        Unishox.USX_TEMPLATES
      );
      break;
    case 250:
      Outlen = Unishox.unishox2_decompress(
        NewData,
        NewData.byteLength,
        DecompressedStrCharArray,
        Unishox.USX_HCODES_DFLT,
        Unishox.USX_HCODE_LENS_DFLT,
        PIRACY_WEBSITE_LIB,
        Unishox.USX_TEMPLATES
      );
      break;
    case 249:
      Outlen = Unishox.unishox2_decompress(
        NewData,
        NewData.byteLength,
        DecompressedStrCharArray,
        Unishox.USX_HCODES_DFLT,
        Unishox.USX_HCODE_LENS_DFLT,
        GENERIC_TLINK_LIB,
        Unishox.USX_TEMPLATES
      );
      break;
    case 248:
      Outlen = Unishox.unishox2_decompress(
        NewData,
        NewData.byteLength,
        DecompressedStrCharArray,
        Unishox.USX_HCODES_DFLT,
        Unishox.USX_HCODE_LENS_DFLT,
        GENERIC_LINK_LIB_1,
        Unishox.USX_TEMPLATES
      );
      break;
    case 247:
      Outlen = Unishox.unishox2_decompress(
        NewData,
        NewData.byteLength,
        DecompressedStrCharArray,
        Unishox.USX_HCODES_DFLT,
        Unishox.USX_HCODE_LENS_DFLT,
        GENERIC_LINK_LIB_2,
        Unishox.USX_TEMPLATES
      );
      break;
    case 246:
      Outlen = Unishox.unishox2_decompress(
        NewData,
        NewData.byteLength,
        DecompressedStrCharArray,
        Unishox.USX_HCODES_DFLT,
        Unishox.USX_HCODE_LENS_DFLT,
        GENERIC_LINK_LIB_3,
        Unishox.USX_TEMPLATES
      );
      break;
  }
  let ResStrCharArray = DecompressedStrCharArray.subarray(0, Outlen);
  return ResStrCharArray;
}

function GetLuhnBit(Data) {
  let Digit = new Array();
  let num, digit;
  for (let i = 0; i < Data.byteLength; i++) {
    num = Data[i];
    while (num > 0) {
      digit = num % 10;
      Digit.push(digit);
      num = Math.floor(num / 10);
    }
  }

  // Digit应当是一个数位构成的数组。
  let sum = 0;
  let Check = 0;

  for (let i = 0; i < Digit.length; i++) {
    if (i % 2 != 0) {
      Digit[i] = Digit[i] * 2;
      if (Digit[i] >= 10) {
        Digit[i] = (Digit[i] % 10) + Math.floor(Digit[i] / 10); //计算数字之和
      }
    }
    sum = sum + Digit[i];
  }

  Check = 10 - (sum % 10);

  return Check;
}

function CheckLuhnBit(Data) {
  let DCheck = Data[Data.byteLength - 1];
  let Check = GetLuhnBit(Data.subarray(0, Data.byteLength - 1));

  if (Check == DCheck) {
    return true;
  } else {
    return false;
  }
}

function RemovePadding(Base64String) {
  let PaddingCount = 0;
  for (let i = Base64String.length - 1; i >= Base64String.length - 4; i--) {
    if (Base64String[i] == "=") {
      PaddingCount++;
    }
  }
  return Base64String.slice(0, Base64String.length - PaddingCount);
}

function AddPadding(Base64String) {
  if (Base64String.length % 4 == 3) {
    return Base64String + "=";
  } else if (Base64String.length % 4 == 2) {
    return Base64String + "==";
  } else {
    return Base64String;
  }
}

// 将WordArray转换为Uint8Array
function wordArrayToUint8Array(data) {
  const dataArray = new Uint8Array(data.sigBytes);
  for (let i = 0x0; i < data.sigBytes; i++) {
    dataArray[i] = (data.words[i >>> 0x2] >>> (0x18 - (i % 0x4) * 0x8)) & 0xff;
  }
  return dataArray;
}

export function stringToUint8Array(str) {
  let tempBase64 = Base64.encode(str);
  return Base64.toUint8Array(tempBase64);
}
function Uint8ArrayTostring(fileData) {
  let tempBase64 = Base64.fromUint8Array(fileData);
  return Base64.decode(tempBase64);
}

function setCharOnIndex(string, index, char) {
  if (index > string.length - 1) return string;
  return string.substring(0, index) + char + string.substring(index + 1);
}

function GetRandomIndex(length) {
  let Rand = Math.floor(MT.random() * length);

  return Rand;
}

function insertStringAtIndex(str, value, index) {
  // 分割字符串为两部分，并在中间插入新值
  return str.slice(0, index) + value + str.slice(index);
}

function difference(arr1, arr2) {
  return arr1.filter((item) => !arr2.includes(item));
}
function rotateString(str, n) {
  return str.slice(n) + str.slice(0, n);
}

function LrotateString(str, n) {
  return str.slice(str.length - n) + str.slice(0, str.length - n);
}
function RoundKeyMatch(keyIn) {
  //查询轮换密钥的键值
  let idx1, idx2;
  let idx1_1, idx2_1;
  let idx1_2, idx2_2;

  idx1 = LETTERS.indexOf(keyIn);
  idx2 = NUMBERSYMBOL.indexOf(keyIn);

  idx1_1 = LETTERS.indexOf(LETTERS_ROUND_1[idx1]);
  idx2_1 = NUMBERSYMBOL.indexOf(NUMBERSYMBOL_ROUND_1[idx2]);

  idx1_2 = LETTERS.indexOf(LETTERS_ROUND_2[idx1_1]);
  idx2_2 = NUMBERSYMBOL.indexOf(NUMBERSYMBOL_ROUND_2[idx2_1]);

  if (idx1 != -1) {
    //判断给定字符的类型
    return LETTERS_ROUND_3[idx1_2];
  } else if (idx2 != -1) {
    return NUMBERSYMBOL_ROUND_3[idx2_2];
  }
  return NULL_STR;
}

function DRoundKeyMatch(keyIn) {
  //查询轮换密钥的键值
  let idx1, idx2;
  let idx1_1, idx2_1;
  let idx1_2, idx2_2;

  idx1 = LETTERS_ROUND_3.indexOf(keyIn);
  idx2 = NUMBERSYMBOL_ROUND_3.indexOf(keyIn);

  idx1_1 = LETTERS_ROUND_2.indexOf(LETTERS[idx1]);
  idx2_1 = NUMBERSYMBOL_ROUND_2.indexOf(NUMBERSYMBOL[idx2]);

  idx1_2 = LETTERS_ROUND_1.indexOf(LETTERS[idx1_1]);
  idx2_2 = NUMBERSYMBOL_ROUND_1.indexOf(NUMBERSYMBOL[idx2_1]);

  if (idx1 != -1) {
    //判断给定字符的类型
    return LETTERS[idx1_2];
  } else if (idx2 != -1) {
    return NUMBERSYMBOL[idx2_2];
  }
  return NULL_STR;
}

function RoundKey() {
  let ControlNum = 0;
  if (RoundFlip == 32) {
    RoundFlip = 0;
  }
  ControlNum = RoundControl[RoundFlip] % 10; //哈希字节对十取余即操作数
  if (ControlNum == 0) {
    //等于零就赋值为10
    ControlNum = 10;
  }

  if (ControlNum % 2 == 0) {
    //操作数是偶数
    LETTERS_ROUND_1 = rotateString(LETTERS_ROUND_1, 6); //将第一个密钥轮向右轮6位
    NUMBERSYMBOL_ROUND_1 = rotateString(NUMBERSYMBOL_ROUND_1, 6);

    LETTERS_ROUND_2 = LrotateString(LETTERS_ROUND_2, ControlNum * 2); //将第二个密钥轮向左轮ControlNum*2位
    NUMBERSYMBOL_ROUND_2 = LrotateString(NUMBERSYMBOL_ROUND_2, ControlNum * 2);

    LETTERS_ROUND_3 = rotateString(LETTERS_ROUND_3, ControlNum / 2 + 1); //将第三个密钥轮向右轮ControlNum/2+1位
    NUMBERSYMBOL_ROUND_3 = rotateString(
      NUMBERSYMBOL_ROUND_3,
      ControlNum / 2 + 1
    );
  } else {
    //操作数是奇数
    LETTERS_ROUND_1 = LrotateString(LETTERS_ROUND_1, 3); //将第一个密钥轮向左轮3位
    NUMBERSYMBOL_ROUND_1 = LrotateString(NUMBERSYMBOL_ROUND_1, 3);

    LETTERS_ROUND_2 = rotateString(LETTERS_ROUND_2, ControlNum); //将第二个密钥轮向右轮ControlNum位
    NUMBERSYMBOL_ROUND_2 = rotateString(NUMBERSYMBOL_ROUND_2, ControlNum);

    LETTERS_ROUND_3 = LrotateString(LETTERS_ROUND_3, (ControlNum + 7) / 2); //将第三个密钥轮向左轮(ControlNum+5)/2位
    NUMBERSYMBOL_ROUND_3 = LrotateString(
      NUMBERSYMBOL_ROUND_3,
      (ControlNum + 7) / 2
    );
  }
  RoundFlip++;
}

function RoundReset() {
  RoundFlip = 0;
  RoundControl = new Array(32);
  LETTERS_ROUND_1 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  LETTERS_ROUND_2 = "FbPoDRStyJKAUcdahfVXlqwnOGpHZejzvmrBCigQILxkYMuWTEsN"; //手动随机打乱的乱序轮
  LETTERS_ROUND_3 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  NUMBERSYMBOL_ROUND_1 = "1234567890+=_-/?.>,<|`~!@#$%^&*(){}[];:";
  NUMBERSYMBOL_ROUND_2 = "~3{8}_-$[6(2^&#5|1*%0,<9:`+@7/?.>4=];!)"; //手动随机打乱的乱序轮
  NUMBERSYMBOL_ROUND_3 = "1234567890+=_-/?.>,<|`~!@#$%^&*(){}[];:";
  MT = new MersenneTwister(Date.now());
}

function RoundControlInit(key) {
  let KeyHash = CryptoJS.SHA256(key);
  let HashArray = wordArrayToUint8Array(KeyHash);

  RoundControl = HashArray;
}

export class PreCheckResult {
  constructor(output, isEncrypted = false) {
    this.output = output;
    this.isEncrypted = isEncrypted;
  }
}

export function preCheck(inp) {
  let input = String(inp);
  let size = input.length; //第一次遍历字符数组的函数，负责判断给定的输入类型。
  let temp, temp2, group;
  let isEncrypted = false; //判定该文本是否为加密文本

  let isJPFound = false; //如果检查出一个日语标志位，则标记为真
  let isCNFound = false; //如果检查出一个汉字标志位，则标记为真
  for (let i = 0; i < size; i++) {
    temp = input[i];

    if (i != size - 1) {
      //一次遍历两个字符，遇到倒数第一个的时候防止越界
      temp2 = input[i + 1];
    } else {
      temp2 = NULL_STR;
    }
    group = temp + temp2;

    //判断这个符号是不是标识符，标识符用空字符进行占位操作
    if (SIG_DECRYPT_JP.indexOf(temp) != -1) {
      input = setCharOnIndex(input, i, NULL_STR);
      isJPFound = true;
      continue;
    }
    if (SIG_DECRYPT_CN.indexOf(temp) != -1) {
      input = setCharOnIndex(input, i, NULL_STR);
      isCNFound = true;
      continue;
    }
  }

  if (isJPFound && isCNFound) {
    isEncrypted = true;
  }
  let Result = new PreCheckResult(stringToUint8Array(input), isEncrypted);
  return Result;
}

export function enMap(input, key, q) {
  //input.output Uint8Array
  RoundReset();
  RoundControlInit(key);

  let OriginalData = new Uint8Array();
  OriginalData = input.output;
  let TempS;
  TempS = Uint8ArrayTostring(OriginalData);

  let TempArray = new Uint8Array(OriginalData.byteLength + 1);
  TempArray.set(OriginalData, 0);

  TempArray.set([GetLuhnBit(OriginalData)], OriginalData.byteLength);

  OriginalData = TempArray;

  if (OriginalData.byteLength <= 1024) {
    let SizeBefore = OriginalData.byteLength;
    OriginalData = UNISHOX_COMPRESS(OriginalData);

    if (OriginalData.byteLength == SizeBefore) {
      OriginalData = GZIP_COMPRESS(OriginalData);
    }
  } else {
    OriginalData = GZIP_COMPRESS(OriginalData);
  }

  let RandomBytes = new Array();
  RandomBytes.push(GetRandomIndex(256));
  RandomBytes.push(GetRandomIndex(256));

  OriginalData = AES_256_CTR_E(OriginalData, key, RandomBytes);

  TempArray = new Uint8Array(OriginalData.byteLength + 2);
  TempArray.set(OriginalData, 0);
  TempArray.set(RandomBytes, OriginalData.byteLength);
  OriginalData = TempArray;

  let OriginStr = RemovePadding(Base64.fromUint8Array(OriginalData));

  let TempStr1 = "",
    temp = "",
    temp2 = "",
    group = "";

  let size = OriginStr.length;
  RoundKey();
  for (let i = 0; i < size; i++) {
    temp = OriginStr[i];
    if (i != size - 1) {
      //一次遍历两个字符，遇到倒数第一个的时候防止越界
      temp2 = OriginStr[i + 1];
    } else {
      temp2 = NULL_STR;
    }
    group = temp + temp2;

    TempStr1 = TempStr1 + getCryptText(temp); //把加密字符加到结果字符串的后面
    RoundKey();
  }

  if (q) {
    RoundReset();
    return TempStr1;
  }

  //第一个循环结束后，TempStr1应当是完全的密文，但是缺少标志位
  let RandIndex, RandIndex2;
  let Avoid = new Array();
  for (let q = 0; q < 2; q++) {
    //分两次大循环
    let PosToInset = new Array();
    let size = TempStr1.length;
    for (let i = 0; i < size; i++) {
      PosToInset.push(i);
    }
    if (q == 0) {
      //第一次大循环插入JP
      RandIndex = PosToInset[GetRandomIndex(PosToInset.length)];
      RandIndex2 = GetRandomIndex(Map_Obj["special"]["DECRYPT"]["JP"].length);
      let stemp = Map_Obj["special"]["DECRYPT"]["JP"][RandIndex2];
      TempStr1 = insertStringAtIndex(TempStr1, stemp, RandIndex);
      for (let z = RandIndex + 1; z < RandIndex + stemp.length; z++) {
        Avoid.push(z);
      }
    } else if (q == 1) {
      //第二次大循环插入CN;
      let AvailPos = new Array();
      AvailPos = difference(PosToInset, Avoid);

      RandIndex = AvailPos[GetRandomIndex(AvailPos.length)];
      RandIndex2 = GetRandomIndex(Map_Obj["special"]["DECRYPT"]["CN"].length);
      TempStr1 = insertStringAtIndex(
        TempStr1,
        Map_Obj["special"]["DECRYPT"]["CN"][RandIndex2],
        RandIndex
      );
    }
  }
  RoundReset();
  return TempStr1;
}

export function deMap(input, key) {
  RoundReset();
  RoundControlInit(key);
  let OriginStr = Uint8ArrayTostring(input.output);
  let TempStr1 = "",
    TempStrz = "";
  let temp = "",
    temp2 = "",
    group = "",
    findtemp = "";
  let size = OriginStr.length;
  for (let i = 0; i < size; i++) {
    temp = OriginStr[i];
    if (temp == NULL_STR || temp == " " || temp == "\n" || temp == "\t") {
      //如果这是空字符
      continue;
    } else {
      //如果不是
      TempStrz = TempStrz + temp; //加上
      continue;
    }
  }
  size = TempStrz.length;
  OriginStr = TempStrz;
  RoundKey();
  for (let i = 0; i < size; ) {
    temp = OriginStr[i];
    if (i != size - 1) {
      //一次遍历两个字符，遇到倒数第一个的时候防止越界
      temp2 = OriginStr[i + 1];
    } else {
      temp2 = NULL_STR;
    }
    group = temp + temp2;

    findtemp = findOriginText(temp); //查找第一个字符的原文
    if (findtemp == NULL_STR) {
      throw "Bad Input. Try force encrypt if intended.";
    }
    TempStr1 = TempStr1 + findtemp; //把找到的原文增加到字符串上
    RoundKey(); //轮换密钥
    i++;
  }
  TempStr1 = AddPadding(TempStr1);
  //到这儿应该能还原出AES加密之后的Base64 TempStr1
  let TempStr2Int = new Uint8Array();
  let RandomBytes = new Array(2);
  if (!Base64.isValid(TempStr1)) {
    throw "Error Decoding. Bad Input or Incorrect Key.";
  }
  try {
    TempStr2Int = Base64.toUint8Array(TempStr1);
    RandomBytes[1] = TempStr2Int.at(TempStr2Int.byteLength - 1);
    RandomBytes[0] = TempStr2Int.at(TempStr2Int.byteLength - 2);

    TempStr2Int = TempStr2Int.subarray(0, TempStr2Int.byteLength - 2);

    TempStr2Int = AES_256_CTR_E(TempStr2Int, key, RandomBytes);
    TempStr2Int = GZIP_DECOMPRESS(TempStr2Int);
    TempStr2Int = UNISHOX_DECOMPRESS(TempStr2Int);
  } catch (err) {
    throw "Error Decoding. Bad Input or Incorrect Key.";
  }

  if (!CheckLuhnBit(TempStr2Int)) {
    if (
      TempStr2Int.at(TempStr2Int.byteLength - 1) == 2 &&
      TempStr2Int.at(TempStr2Int.byteLength - 2) == 2 &&
      TempStr2Int.at(TempStr2Int.byteLength - 3) == 2
    ) {
      TempStr2Int = TempStr2Int.subarray(0, TempStr2Int.byteLength - 3);
    } else {
      throw "Error Decrypting. Checksum Mismatch.";
    }
  } else {
    TempStr2Int = TempStr2Int.subarray(0, TempStr2Int.byteLength - 1);
  }

  //到此，TempStr2Int 就是解密的结果，形式为字节码。
  let Res = new Object();

  Res.output = Uint8ArrayTostring(TempStr2Int);
  Res.output_B = TempStr2Int;

  RoundReset();
  return Res;
}

export function getCryptText(text) {
  let letter = String(text); //源文本
  let idx, idx2, idx3, idx4;

  idx = LETTERS.indexOf(letter); //是否是小写字母
  idx2 = BIG_LETTERS.indexOf(letter); //是否是大写字母
  idx3 = NUMBERS.indexOf(letter); //是否是数字
  idx4 = SYMBOLS.indexOf(letter); //是否是符号
  let RandIndex, RandIndex2;

  //判断给定字符的类型
  if (idx != -1 || idx2 != -1) {
    for (let key in Map_Obj["basic"]["alphabet"]) {
      if (Map_Obj["basic"]["alphabet"].hasOwnProperty(key)) {
        if (key == letter) {
          RandIndex = GetRandomIndex(
            Map_Obj["basic"]["alphabet"][RoundKeyMatch(key)].length
          );
          let s2 = Map_Obj["basic"]["alphabet"][RoundKeyMatch(key)][RandIndex];
          return s2;
        } else if (key.toUpperCase() == letter) {
          RandIndex = GetRandomIndex(
            Map_Obj["basic"]["alphabet"][RoundKeyMatch(key.toUpperCase())]
              .length
          );
          let s2 = String(
            Map_Obj["basic"]["alphabet"][RoundKeyMatch(key.toUpperCase())][
              RandIndex
            ]
          );
          return s2;
        }
      }
    }
  } else if (idx3 != -1 || idx4 != -1) {
    for (let key in Map_Obj["basic"]["numbersymbol"]) {
      if (Map_Obj["basic"]["numbersymbol"].hasOwnProperty(key)) {
        if (key == letter) {
          RandIndex = GetRandomIndex(
            Map_Obj["basic"]["numbersymbol"][RoundKeyMatch(key)].length
          );
          let s2 =
            Map_Obj["basic"]["numbersymbol"][RoundKeyMatch(key)][RandIndex];
          return s2;
        }
      }
    }
  }
  return NULL_STR;
}

export function findOriginText(text) {
  let letter = String(text);
  let res;
  for (let key in Map_Obj["basic"]["alphabet"]) {
    Map_Obj["basic"]["alphabet"][key].forEach((item) => {
      if (letter == item) {
        res = DRoundKeyMatch(key);
      }
    });
  }
  if (res) {
    return res;
  }
  for (let key in Map_Obj["basic"]["numbersymbol"]) {
    Map_Obj["basic"]["numbersymbol"][key].forEach((item) => {
      if (letter == item) {
        res = DRoundKeyMatch(key);
      }
    });
  }
  if (res) {
    return res;
  } else {
    return NULL_STR;
  }
}
