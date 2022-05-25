/**
 * 打字效果 byaei
 */
function typewrite() {
    let str = "<我愿意，写满整个世界的诗篇<因为...<因为当代码不止是代码的时候，它就有了新的意义。<"; //利用<作为换行符 -作为空格
    let strp = "";
    let i = 0;

    function print1() {
        if (str[i] == '<') {
            document.getElementById("box1").innerHTML = strp + "<br><br>" + '|';
            strp += "<br><br>";
        } else
        if (str[i] == '-') {
            document.getElementById("box1").innerHTML = strp + '&nbsp&nbsp&nbsp';
            strp += "&nbsp&nbsp&nbsp";
        } else {
            strp += str[i];
            document.getElementById("box1").innerHTML = strp + '|';
        }
        i++;
    }

    function print2() {
        setTimeout(() => { document.getElementById("box1").innerHTML = strp + '&nbsp'; }, 100);
        setTimeout(() => { document.getElementById("box1").innerHTML = strp + '|'; }, 630);
    }
    let printid = setInterval(() => {
        print1();
        if (i == str.length)
            clearInterval(printid);
    }, 90);
    setTimeout(() => {
        id = setInterval(print2, 1060); //注意setInterval内部直接写函数的时候是直接写函数名不加括号的。
    }, (str.length - 1) * 90);
    //0.53秒闪一次
}




let clickb = false; //判断播放按钮是否已经按过了，如果已经按过了才可以执行键盘事件

function funclick() {
    let x = document.createElement("audio");
    x.setAttribute("src", "./video/55.mp3");
    x.setAttribute("autoplay", "autoplay");
    let yinyan = document.getElementById("yinyan");
    yinyan.setAttribute("style", "opacity:0");
    setTimeout(function() {
        document.getElementById("fronclick").style.zIndex = -300;
        document.getElementById("box").style.opacity = 1;
    }, 1500); //让播放按钮消失了
    //yinyan.style.opacity=0;
    clickb = true;
}




let k = {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
    e: 4,
    f: 5,
    g: 6,
    h: 7,
    i: 8,
    j: 9,
    k: 10,
    l: 11,
    m: 12,
    n: 13,
    o: 14,
    p: 15,
    q: 16,
    r: 17,
    s: 18,
    t: 19,
    u: 20,
    v: 21,
    w: 22,
    x: 23,
    y: 24,
    z: 25,
    A: 0,
    B: 1,
    C: 2,
    D: 3,
    E: 4,
    F: 5,
    G: 6,
    H: 7,
    I: 8,
    J: 9,
    K: 10,
    L: 11,
    M: 12,
    N: 13,
    O: 14,
    P: 15,
    Q: 16,
    R: 17,
    S: 18,
    T: 19,
    U: 20,
    V: 21,
    W: 22,
    X: 23,
    Y: 24,
    Z: 25
}
let a = [
    { name: "A", yin: 8, str: "<br><br><br>这个世纪疯狂,没人性,腐败。<br><br>还有....,其他的键<br><br>那些都是关于你的声音。以及，找一下声音里关于你的线索。" },
    { name: "B", yin: 2, str: `<br><br><br>若逢新雪初霁，满月当空<br>下面平铺着皓影，上面流转着亮银，<br><br>而你带笑地向我走来，<br><br>月色和雪色之间 ，是第三种绝色 ，<br><br>与我而言， 日月星辉之中，你是第四种难得。` },
    { name: "C", yin: 3, str: "<br><br><br><br>我总是想些无关紧要的事<br><br>比如宇宙的目的，熬夜与猝死的关系<br><br>你是否曾爱我" },
    { name: "D", yin: 4, str: "<br><br><br><br>我想再和你谈谈<br><br>那只在你七月的暴雨中<br><br>刚刚落下的鸟" },
    { name: "E", yin: 5, str: "<br><br><br><br>若是你决定了要来见我<br><br>请务必提前一周告诉我<br><br>我好将10200个小时前的相见再反复回想" },
    { name: "F", yin: 6, str: "<br><br><br><br>我爱你<br><br>剩余一行<br><br>笔给你" },
    { name: "G", yin: 7, str: "<br><br>我试图用那些漂亮的句子来形容你。但是不行<br><br>我字字推敲写出长长一段话，你眉眼一弯熠熠生辉，就让我觉得。不行<br><br>这些文字写不出你眼里的星辰，写不出你唇角的春风<br></br>无论哪个词，都及不上你半分的惊艳。" },
    { name: "H", yin: 5, str: "<br><br>你的双眸有遥远的冬雪，你的微笑有绚烂的夏阳，<br></br>你一转身便有花开为你，你一低头便有星辰黯然，<br></br>你在我心里，我便拥有全世界。" },
    { name: "I", yin: 3, str: "<br><br>我见过沧海的云，巫峡的雨。 <br>我见过一月的雪覆于白山，又渐变于葱茏。 <br>我在峨眉的林里云兴霞蔚， 一径之后，雾水成露，沾于衣襟。<br>我听过柔橹漂浮，声声入水，又归于沉寂。 <br>我看到春风八里十里，衣袖带花。 无论何时忆起， 它们实在是人生可喜， <br><br>但都不如我此刻遇到的你。" },
    { name: "J", yin: 10, str: "<br><br><br><br>花盛开就是一句，夜漫过就是一篇。<br><br>黄昏开始书写，黎明是无数的扉页。<br><br>全世界拼成首诗。我爱你当作最后一行。" },
    { name: "K", yin: 11, str: "<br><br>对你的喜欢，大抵是燃烧的星星坠落在海底开成珊瑚，<br><br>又或是揉碎的白云环绕着山峦流成大河。<br><br>那种梦幻，不真切，却令人迷醉的心动，<br></br>就像晚风拥抱月亮，海浪亲吻礁石。" },
    { name: "L", yin: 8, str: "<br><br><br><br>世界上美好的东西不太多,<br><br>立秋傍晚从河对岸吹来的风,<br><br>和二十来岁笑起来要人命的你。" },
    { name: "M", yin: 13, str: "<br><br><br><br>“在青山绿水之间，我想牵着你的手，<br></br>走过这座桥，桥上是绿叶红花，<br><br>桥下是流水人家，桥的那头是青丝，桥的这头是白发。”" },
    { name: "N", yin: 3, str: "<br><br><br><br>月亮照回湖心<br><br>野鹤奔向闲云<br><br>我步入你" },
    { name: "O", yin: 7, str: "<br><br><br><br>我们或者在月光下闲游，<br><br>或者在灯光下谈心，<br><br>手握着手，心对着心，<br><br>就像一对五十岁的情人。" },
    { name: "P", yin: 16, str: "<br><br><br><br>草在结它的种子，<br><br>风在摇它的叶子，<br><br>我们站着不说话，就十分美好。" },
    { name: "Q", yin: 17, str: "<br><br><br><br>你一眨眼，温驯的小鹿有跳动一下，<br><br>柔软的暖风有轻拂一下，遥远的星星有闪烁一下，<br><br>我也有心动，却不止一下。" },
    { name: "R", yin: 18, str: "<br><br><br><br>星河璀璨，阳光干净，<br><br>在人间所有美好的存在里，<br><br>不论是活着或者死去，我总是最爱你。" },
    { name: "S", yin: 19, str: "<br><br>我的心是亿万光年恒星爆炸后的残骸，荒烟蔓草，满目疮痍。<br><br>你来到这里，携着万千欢喜，覆在贫瘠之地上。枯木逄春，<br></>从此我的世界里只有为你而绽的名为爱的绝色。" },
    { name: "T", yin: 20, str: "<br><br>写信真是一件温柔的事，细腻的小心思就藏在横竖撇捺之中，<br><br>像是一只害羞的小兽躲在情意绵绵的字里行间，被火漆封印起来，<br><br>等着解封的那一刻窜出来，跳进启信人眼底的柔波里。" },
    { name: "U", yin: 5, str: "<br><br>我把我整个的灵魂都给你，<br><br>连同它的怪癖，耍小脾气，忽明忽暗，<br><br>一千八百种坏毛病， 它真讨厌。只有一点好， 爱你" },
    { name: "V", yin: 22, str: "<br><br><br><br>我一生都是坚定不移的唯物主义者<br><br>唯有你<br><br>我希望有来生" },
    { name: "W", yin: 3, str: "<br><br><br><br>这个世纪疯狂,没人性,腐败。<br><br>您却一直清醒,温柔,<br><br>一尘不染。" },
    { name: "X", yin: 2, str: "<br><br><br><br>纵然万劫不复，<br><br>纵然相思入骨，我也待你眉眼如初，<br><br>岁月如故。" },
    { name: "Y", yin: 25, str: "<br><br><br><br>月遇从云，花遇和风，<br><br>今晚上的夜空很美，<br><br>我又想你。" },
    { name: "Z", yin: 26, str: "<br><br><br><br>月遇从云，花遇和风，<br><br>因为天气好，因为天气不好，因为天气刚刚好，<br><br>每一天，都很美好。" }
];
let b = ["linear-gradient(25deg, #c3786f, #a99188, #84a7a1, #3bbcbb)",
    "linear-gradient(25deg, #cb5860, #b3876f, #90ad7f, #4acf8f)",
    "linear-gradient(25deg, #e473a3, #d294aa, #bbb0b1, #9ccab8)",
    "linear-gradient(25deg, #452089, #505ca1, #4b94b8, #24cdcf)",
    "linear-gradient(25deg, #04245a, #652959, #a62557, #e60b55)",
    "linear-gradient(25deg, #88a0ff, #b6bedd, #d6deb9, #eeff91)",
    "linear-gradient(25deg, #3e1c59, #53646f, #53ad83, #27fb95)",
    "linear-gradient(25deg, #590146, #634264, #647184, #56a1a5)",
    "linear-gradient(25deg, #694afc, #a26dfd, #d091fe, #f9b7fe)",
    "linear-gradient(25deg, #412285, #4c599c, #488eb3, #29c4c9)",
    "linear-gradient(25deg, #003876, #1f6889, #239b9a, #00d1ab)",
    "linear-gradient(25deg, #db6679, #b9907b, #8bb17e, #29ce80)",
    "linear-gradient(25deg, #060d37, #174161, #1d7a8d, #12b8bc)",
    "linear-gradient(25deg, #fcb9b5, #fed0ad, #ffe7a5, #fffd9b)",
    "linear-gradient(25deg, #0f4660, #6b486c, #ac3f78, #ec1384)",
    "linear-gradient(25deg, #094189, #7f566b, #bd6d49, #f78707)",
    "linear-gradient(43deg, #00a08c, #7db19d, #c1c0af, #ffcec1)",
    "linear-gradient(35deg, #526fbf, #8c98d0, #bfc3e0, #f0f0f0)",
    "linear-gradient(25deg, #d03e9b, #d2788a, #cfa676, #c6d05c)",
    "linear-gradient(25deg, #8fd647, #a0d187, #a8ccbf, #a8c7f7)",
    "linear-gradient(25deg, #e45579, #c59280, #96bf87, #19e88e)",
    "linear-gradient(25deg, #d575db, #b29db2, #83bb87, #00d456)",
    "linear-gradient(25deg, #d929f7, #e67cc5, #e5b38f, #d8e549)",
    "linear-gradient(25deg, #fd390b, #e1765b, #b19fa1, #1ec1e9)",
    "linear-gradient(25deg, #7b7bd4, #759cbc, #62bca2, #30db85)",
    "linear-gradient(25deg, #d6007b, #b8509e, #8a71c2, #0b8be8)"
];
let s = 'a';
let records = 0; //记录我已经输入过了，防止出现多个打字function byaei


/*键盘事件*/
function fl(e) {
    if (clickb == true) {
        let key = e.key;
        if ((key <= 'z' && key >= 'a') || (key <= 'Z' && key >= 'A')) //避免大小写的错误
        {
            let p = a[k[key]];
            s = s + p.name;
            let x = document.createElement("audio");
            x.setAttribute("src", `./video/${p.yin}.mp3`);
            x.setAttribute("autoplay", "autoplay");
            let box = document.getElementById("box");
            let boxl = document.getElementById("boxl");
            let boxr = document.getElementById("boxr");
            let boxup = document.getElementById("boxup");
            let bac = document.getElementById("bac");
            bac.style.opacity = 0;
            box.style.transition = "0.5s";
            box.style.opacity = 0;
            boxup.style.opacity = 0;
            setTimeout(function() {
                boxl.innerHTML = `${p.name}`;
                boxr.innerHTML = `${p.str}`;
                console.log(b[k[key]]);
                bac.style.background = `${b[k[key]]}`;
                box.style.opacity = 1;
                boxup.style.opacity = 1;
                bac.style.opacity = 1;
            }, 500);
            if (s.indexOf("KSHWXHN") != -1 && records == 0) {
                setTimeout(function() {
                    records = 1;
                    bac.style.opacity = 0;
                    box.style.opacity = 0;
                    boxup.style.opacity = 0;
                    bac.style.opacity = 0;
                    let box1 = document.getElementById("box1");
                    box1.style.zIndex = 7;
                    box1.style.opacity = 1;
                    let music = document.createElement("audio");
                    x.setAttribute("src", `./video/snjxh.mp3`);
                    x.setAttribute("autoplay", "autoplay");
                    x.setAttribute("loop", "loop");
                }, 750);
                setTimeout(typewrite, 3000); //进行打字
            }
        }
    }
}


window.onkeyup = fl;