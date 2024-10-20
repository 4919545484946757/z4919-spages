    var ltid = document.querySelectorAll('.lt');
    var imgbox1 = document.getElementById('i1');
    var imgbox2 = document.getElementById('i2');
    var name1 = document.getElementById('name1');
    var time = document.getElementById('time');
    var kind = document.getElementById('kind');
    var award = document.getElementById('award');
    var person = document.getElementById('person');
    var intro = document.getElementById('intro');

    ltid.forEach(function(bigger) {
        bigger.addEventListener('click', function() {
            if (imgbox1.classList.contains('show')) {
            //获取背景样式
            var boxstyle = getComputedStyle(this).backgroundImage;
                imgbox2.style.backgroundImage = boxstyle;
                imgbox2.classList.add('show');
                imgbox1.classList.remove('show');
        } else {
            //获取背景样式
            var boxstyle = getComputedStyle(this).backgroundImage;
                imgbox1.style.backgroundImage = boxstyle;
                imgbox1.classList.add('show');
                imgbox2.classList.remove('show');
        }
        var filmid = this.id;
        switch (filmid) {
            case 'l1':
                name1.innerHTML = 'S;G-负荷领域的既视感';
                time.innerHTML = '2013年4月20日';
                kind.innerHTML = '动画，剧情，爱情，科幻，冒险';
                award.innerHTML = '第3届Newtype动画赏：作品赏第1名';
                person.innerHTML = '牧濑红莉栖，冈部伦太郎';
                intro.innerHTML = '自称为“狂妄的疯狂科学家”,至今仍是中二病的大学生‧冈部伦太郎。他与他的同伴偶然发明了能送往过去的邮件D-MAIL。由此所引起的，是即使多次过去改变（世界线移动）也会到访的同伴死去的未来……在绝望的冈部面前出现的曙光，是称为“命运石之门”的世界线。跨越时间轴解开各种谜团，冈部终于到达了“命运石之门”。可是，跨越了众多世界线的冈部，开始出现了庞大的”负荷”……';
                break;
            case 'l2':
                name1.innerHTML = '银魂：永远的万事屋';
                time.innerHTML = '2013年7月6日';
                kind.innerHTML = '搞笑、热血、励志、恶搞';
                award.innerHTML = '假完结';
                person.innerHTML = '银时，神乐，新八';
                intro.innerHTML = '某次意外事件，银时被抛入时空隧道出现在五年后的世界。呈现在他眼前的，是被神秘病毒“白色诅咒”饱经摧残已成废墟的江户。百姓贫困痛苦，攘夷志士策划向政府发动绝死反攻，社会秩序全面崩溃。在此期间，彷徨无助的银时邂逅了两个年轻人，一个是腰别洞爷湖英姿飒爽的眼镜青年，另一个是带着巨大的白狗身着华服的冷艳美女，他们竟然是已经成长起来了新八和神乐；更令银时难以置信的是，他竟亲眼目睹刻有自己名字的墓碑';
                break;
            case 'l3':
                name1.innerHTML = '虫师 续章 铃之雫';
                time.innerHTML = '2015年5月16日';
                kind.innerHTML = '奇幻,治愈';
                award.innerHTML = '';
                person.innerHTML = '银古，奴伊';
                intro.innerHTML = ' 这里的虫既不是动植物，也与微生物和菌类不同，是更接近生命原生态的东西。这些东西总称为“虫”。它们的形态和存在都很暧昧，当人与虫的世界重叠之时，发生了超越人类智慧的怪异现象，此时人类才开始知道它们的存在。 所谓生命，并非为威胁异己而存在。只是，各自以各自的形态存在着——作为连接这样的”虫“与人类的”虫师“--主人公银古，在旅途中不断与各种各样的人及与其关联的虫相遇。绘就了每话登场人物各不相同，读不尽的画卷。';
                break;
            case 'l4':
                name1.innerHTML = '傲慢与偏见';
                time.innerHTML = '2005年9月16日';
                kind.innerHTML = '剧情、爱情';
                award.innerHTML = '第78届奥斯卡金像奖';
                person.innerHTML = '伊丽莎白·班纳特，达西';
                intro.innerHTML = '因为富豪子弟达西在短暂的交往后很快便深深地爱上了美丽的伊丽莎白。并且，达西不顾门第和财富的差距，勇敢地向她求婚，但却因为伊丽莎白对他存有的误会和偏见，而遭到了无情的拒绝。伊丽莎白对他存有误会和偏见的原因是，出身富贵的达西经常表现出不可一世的傲慢，这令正直善良的伊丽莎白讨厌不已。因为达西的这种傲慢实际上是地位差异的反映，只要存在这种傲慢，他与伊丽莎白之间就不可能有共同的思想和感情，也不可能有理想的婚姻。但经过了一段时间之后，伊丽莎白渐渐地亲眼看到并发现了同样善良的达西在为人处世和一系列所作所为上有了质的改变。特别是他过去那种骄傲自负的神态完全不见了踪影，于是伊丽莎白对他的误会和偏见也逐渐消失，一段美满的姻缘也就此最终成就。';
                break;
            case 'l5':
                name1.innerHTML = '一个叫欧维的男人决定去死';
                time.innerHTML = '2015年12月25日';
                kind.innerHTML = '剧情、喜剧';
                award.innerHTML = '第29届欧洲电影奖最佳喜剧片';
                person.innerHTML = '欧维';
                intro.innerHTML = '该片讲述了一个叫欧维的男人在妻子索尼娅去世后，决定自杀追随却一直未果的故事';
                break;
            case 'l6':
                name1.innerHTML = '九品芝麻官之白面包青天';
                time.innerHTML = '1994年3月31日';
                kind.innerHTML = '剧情、喜剧、古装';
                award.innerHTML = '';
                person.innerHTML = '包龙星';
                intro.innerHTML = '该片讲述了“九品芝麻官”包龙星为了给一名含冤入狱的女子秦小莲申冤，他用尽一切努力最终使恶人命丧铡刀之下的故事';
                break;
            default:
                name1.innerHTML = '';
                time.innerHTML = '';
                kind.innerHTML = '';
                award.innerHTML = '';
                person.innerHTML = '';
                intro.innerHTML = '';
                break;
        }


        });
    });
