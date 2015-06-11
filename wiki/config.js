/**
 * 该导航引用自企鹅团队，感谢！！
 * http://css3lib.alloyteam.com/
 */
//初始化左侧的导航资源
~(function() {
    var data = {
        list: [{
            title : '框架',
            source : { 
                href: ['http://v3.bootcss.com/', 'http://www.jeasyui.com/', 'http://dhtmlx.com/', 'http://jqueryui.com/',
                'http://aozora.github.io/bootmetro/', 'http://www.yaml.de/', 'http://topcoat.io/', 'http://cssdb.co/',
                'http://flexiejs.com/'],
                text: ['Bootstrap(zh)', 'EasyUI', 'DHTMLX', 'jQueryUI', 'Bootmetro', 'YAML', 'Topcoat', 'List', 'Flexie']
            }
        },{
            title : 'JS基础库',
            source : { 
                href: ['http://tangram.baidu.com/', 'http://docs.kissyui.com/', 'http://alloyteam.github.io/JX/',
                'http://www.qwrap.com/about.html', 'http://yuilibrary.com/', 'http://zeptojs.com/',
                'http://nej.netease.com/', 'http://aralejs.org/'],
                text: ['Tangram', 'Kissy', 'JX', 'Qwrap', 'YUI', 'Zepto', 'NEJ', 'Arale']
            }
        },{
            title : '插件',
            source : { 
                href: ['http://tableclothjs.com/', 'http://luis-almeida.github.io/jPages/', 
                    'http://ueditor.baidu.com/website/index.html', 'http://www.my97.net/','http://warpech.github.io/jquery-handsontable/index.html',
                    'http://paperjs.org/about/', 'http://gridster.net/',
                    'http://jsonenglish.com/projects/flex/', 'http://fineuploader.com/', 'http://www.ztree.me/v3/main.php#_zTreeInfo',
                    'http://www.highcharts.com/', 'http://www.uploadify.com/',
                    'http://raphaeljs.com/', 'http://www.css88.com/EasyTools/javascript/jQueryPlugin/imgAreaSelect/index.html',
                    'http://www.flotcharts.org/','http://www.patrick-wied.at/static/heatmapjs/',
                    'http://fabien-d.github.io/alertify.js/', 'http://plugins.gravitysign.com/rollbar/',
                    'http://www.csswang.com/resource/4353.html',
                    'http://www.steamdev.com/zclip/'],
                text: ['table', 'jpage', 'editor', 'datePicker',
                 'Handsontable', 'paperjs','grid','flex', 'fileUploader', 'zTree', 
                 'highcharts', 'uploadify', 'raphaeljs', 'imgareaselect', 'flotcharts','heatmap', 
                 'alertify', 'rollbar', 'pageGuide','zclip']
            }
        },{
            title : '工具类',
            source : { 
                href: ['http://baidufe.github.io/BaiduTemplate/', 'http://aui.github.io/artTemplate/', 
                'http://garann.github.io/template-chooser/', 'http://www.css88.com/doc/underscore/',
                'http://www.css88.com/doc/backbone/', 'http://seajs.org/docs/',
                'http://requirejs.org/', 'http://sofish.github.io/express-guide/',
                'http://lodash.com/', 'http://stoic.com/formula/', 'http://emberjs.torriacg.org/'],
                text: ['BDtemplate', 'Arttemplate', 'Template', 'underscore(zh)', 'Backbone(zh)', 
                'seajs', 'requirejs', 'express(zh)', 'Lo-Dash','Formula', 'EMBER(zh)']
            }
        },{
            title : '动画',
            source : { 
                href: ['http://isotope.metafizzy.co/index.html', 'http://jindo.dev.naver.com/collie/index.html',
                'http://bartaz.github.io/impress.js', 'http://workshop.chromeexperiments.com/',  
                'http://www.storminthecastle.com/projects/goo.js/',
                'http://somajs.github.io/somajs/', 'http://pazguille.github.io/flipload/',
                'http://louisremi.github.io/jquery.transform.js/index.html',
                'http://spritely.net/documentation/', 'http://labs.bigroomstudios.com/libraries/animo-js',
                'http://github.hubspot.com/odometer/docs/welcome/',
                'http://h5bp.github.io/Effeckt.css/dist/',
                'http://www.hotajax.org/demo/BySlideMenu/scripts/index.html',
                'http://packery.metafizzy.co/'],
                text: ['Isotope', 'Collie', 'impress', 'chromeexperiments', 'goo', 'somajs',
                 'flipload', 'transform', 'spritely', 'animo', 'odometer', 'Performant', 'Accordion',
                 'Packery']
            }
        },{
            title : '常用工具、手册',
            source : {
                href : ['http://www.zybuluo.com/mdeditor', 'http://resource.ajava.org/java/jdk-api-1.6/',
                'http://man.ddvip.com/web/JScriptzhref/index.html', 'http://css.doyoe.com/',
                'http://ued.ctrip.com/blog/wp-content/webkitcss/index.html', 
                'http://demo.doyoe.com/', 'http://wiki.zx.taobao.com/index.php', 'http://www.html5china.com/manual/html5/html5_ref_standardattributes.html',
                'http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/index.html',
                'http://jsbooks.revolunet.com/', 'http://runjs.cn/', 'http://jsbin.com/',
                'http://jsfiddle.net/',
                'http://alloyteam.github.io/gopng/',
                'http://tinypng.org/', 'http://javawind.net/tools/native2ascii.jsp',
                'http://nodeschool.io/', 'http://blog.teamtreehouse.com/',
                'http://tympanus.net/codrops/category/tutorials/',
                'http://overapi.com/', 'http://f2e.im/static/pages/nav/index.html',
                'http://it-ebooks.info/', 'http://codepen.io/', 'http://codevisually.com/',
                'http://css3lib.alloyteam.com/', 'http://html5demos.com/',
                'http://devdocs.io/', 'http://tool.css-js.com/','http://jinlong.github.io/blog/2013/08/29/devtoolsecrets/',
                'http://hotoo.googlecode.com/svn/trunk/labs/css/css-fonts.html',
                'https://stackedit.io/', 'http://css3generator.com/',
                'http://www.bootcss.com/p/git-guide/', 'http://nodeapi.ucdok.com/api/'],
                text : ['mdeditor', 'Java', 'JavaScript', 'CSS', 'Webkitcss', 'FElab', 'TB', 'HTML',
                'ActionScript', 'FreeBook', 'Runjs', 'jsbin', 'jsfiddle', 'gopng', 'tinypng', 'native2ascii', 'nodeschool', 'teamtreehouse',
                'tutorials', 'api', 'FESource', 'it-ebooks', 'codepen', 'codevisually', 'alloyteam', 
                'html5demos', 'devDoc', 'jsmin','devTool','css-fonts','stackedit', 'css3generator', 'git', 'nodejs']
            }
        },{
            title : '干货分享',
            source : {
                href : ['http://www.cnblogs.com/menlsh/archive/2012/10/02/2709923.html',
                'http://www.cnblogs.com/vamei/archive/2013/03/14/2958654.html',
                'http://www.cnblogs.com/damonlan/archive/2012/07/09/2581739.html',
                'http://www.cnblogs.com/egger/archive/2013/04/26/3045975.html',
                'http://www.cnblogs.com/huangxincheng/archive/2012/02/18/2356595.html',
                'http://www.cnblogs.com/yexiaochai/archive/2013/04/29/3050798.html',
                'http://www.cnblogs.com/TomXu/archive/2011/12/15/2288411.html',
                'http://www.cnblogs.com/watsonyin/archive/2012/09/10/2679528.html',
                'http://bonsaiden.github.io/JavaScript-Garden/zh',
                'http://zxhfighter.github.io/blog/javascript/2013/03/14/javascript-quiz.html',
                'http://zouyesheng.com/angular.html',
                'http://github.com/darcyclarke/Front-end-Developer-Interview-Questions/tree/master/Chinese',
                'http://github.com/JacksonTian/fks',
                'http://www.ituring.com.cn/article/48461', 'http://liam0205.me/attachment/Python/The_Python_Tutorial_zh-cn.pdf',
                'http://www.cnblogs.com/Darren_code/archive/2011/12/31/property.html',
                'http://browserhacks.com/'],
                text : ['Android', 'Java', 'Oracle', 'MongoDB(上)', 'MongoDB(下)', 'HTML5',
                'JavaScript','$2Job', 'JavaScript-Garden', 'JavaScript-Quiz', 'Angular', 
                'FE 面试', 'FE 体系', 'JS-Base', 'Python', 'profile', 'hack']
            }
        },{
            title : '名博站点',
            source : {
                href : ['http://ued.alimama.com/'],
                text : ['一淘UX']
            }
        }]
    };

    $('#demoList').html(baidu.template('navSourceTpl',data));

    var toolbarHeight = 40;
     $(window).resize(function(){
        var winHeight = $(window).height();
        $('#content').height(winHeight - toolbarHeight);
    }).resize();
})();

;jQuery(function($){
    var $selectedDemoItem = null;
    var selectedDemoId = null;
    var $demoListUl = $('#demoList');
    var execCommand = function(cmd, event, element){
        switch(cmd){
            case 'showChild':{
                selectCategory(element, true);
                break;
            }
            case 'viewDemo':{
                selectDemo(element);
                break;
            }
        }
    };
    var viewDemo = function(url){
        var $iframe = $('<iframe frameborder="0" class="content-iframe"></iframe>'),
        $currentIframe = $iframe;
        $iframe.attr('src', url);
        $('#iframeWrap').empty().append($iframe);
    }

    var getActionTarget = function(event, level, property, parent){
        var t = event.target,
            l = level || 3,
            s = level !== -1,
            p = property || 'cmd',
            end = parent || document.body;
        while(t && (t !== end) && (s ? (l-- > 0) : true)){
            if(t.getAttribute(p)){
                return t;
            }else{
                t = t.parentNode;
            }
        }
        return null;
    }
    $demoListUl.click(function(e){
        var target = getActionTarget(e, -1, 'cmd', this);
        if(target){
            e.preventDefault();
            var cmd = target.getAttribute('cmd');
            execCommand(cmd, e, target);
        }
    });
    
    $demoListUl.css('visibility', 'hidden')
        .find('.child')
        .each(function(i){
            var $this = $(this);
            $this.data('childHeight', $this.height()).height(0);
        });
    $demoListUl.css('visibility', 'visible');

    var selectCategory = function(cateId, toggle){
        var $element = typeof(cateId) == 'string' ? $('#' + cateId) : $(cateId);
        if(!$element.length){
            return;
        }
        var $element = $element.parent();
        var $child = $element.children('ul');
        
        if($element.data('isShowChild')){
            if(toggle){
                $element.removeClass('show-child');
                $element.data('isShowChild', 0);
                $child.height(0);
            }
        }else{
            $element.addClass('show-child');
            $child.height($child.data('childHeight'));
            $element.data('isShowChild', 1);
        }
        
    }

    var selectDemo = function(demoId){
        var $element = typeof(demoId) == 'string' ? $('#' + demoId) : $(demoId);
        if(!$element.length){
            return;
        }
        demoId = $element.attr('id');
        if(selectedDemoId === demoId){
            return;
        }
        selectedDemoId = demoId;
        $selectedDemoItem && $selectedDemoItem.removeClass('selected');
        $element.addClass('selected');
        $selectedDemoItem = $element;
        viewDemo($element.attr('href'));
    }
//end of package
});
