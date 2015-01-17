'use strict';

angular.module('app', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ngRoute', 'pascalprecht.translate'])
  .config(function ($routeProvider, $translateProvider, $logProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController'
      })
      .otherwise({
        redirectTo: '/'
      });

      $translateProvider.translations('zh_TW', {
        'TRADITIONAL_CHINESE': '繁',
        'SIMPLIFIED_CHINESE': '简',
        'THAI': '泰',
        'HONG_KONG': 'Hong Kong 香港',
        'SITE_TITLE': 'Thai in HK 泰文班 • 香港',
        'SITE_SUBTITLE': '一起輕鬆學泰文',
        'SITE_DESCRIPTION_1': '拜訪曼谷四面佛、到布吉滑浪、在蘇梅島的長灘上撐一把太陽傘，來一個椰青，遠離城市煩囂，是不少人下個假期的計劃吧？',
        'SITE_DESCRIPTION_2': '還是，你打算出走南泰小村，一探原始泰國風貌？',
        'SITE_DESCRIPTION_3': '無論如何，一口流利的泰文都是你旅遊旁身必然選擇！',
        'SITE_DESCRIPTION_4': '跟書本一字一句聽說讀寫？Out 了！學語文，當然要找地道 80 後，從聽講開始，短時間掌握真正溝通的技巧吧！',
        'SITE_DESCRIPTION_5': '想要暢遊泰國，快報名學泰文喇！',

        'THAI_CLASS': '泰語班',
        'FULL': '已滿',
        'INDIVIDUAL_CLASS': '個人課程',
        'INDIVIDUAL_CLASS_DESCRIPTION': '可根據原有的程度調節課程難度和進度，不用怕跟不上其他同學而失去信心。可以自選上課時間及地點，方便安排課程時間。',
        'INDIVIDUAL_CLASS_PRICE': '學費：$ 300／堂（1.5 小時）。',

        'GROUP_CLASS': '小组课程（2-5人）',
        'GROUP_CLASS_DESCRIPTION': '有朋友陪伴可以增添樂趣，多些互動，又可以有更多對話練習的機會。',
        'GROUP_CLASS_PRICE': '學費：$ 200／堂（1.5 小時）。',

        'TRAVELLING_CLASS': '旅遊泰語課程',
        'SPEAKING_CLASS': '口語班',
        'NEW': '新',
        'SPEAKING_CLASS_DESCRIPTION': '跳過讀寫，只學聽讀。專注於旅日常用語，以備到泰國旅行可派上用場，在陌生的國度沒有後顧之憂。',
        'SPEAKING_CLASS_PRICE': '學費：（個人）$ 300／堂（1.5 小時），（小組）$ 200／堂（1.5 小時）。',
        'TOTAL_LESSONS': '共 12 堂課',
        'LESSON_1': '問候語 ทักทาย',
        'LESSON_2': '你電話號碼幾號？ โทรศัพท์คุณเบอร์อะไร',
        'LESSON_3': '買東西 ซื้อของ',
        'LESSON_4': '能給我一個折扣嗎？ ลดราคาหน่อยได้ไหม',
        'LESSON_5': '量詞與顏色 ลักษณะนามและสีสัน',
        'LESSON_6': '在路邊攤點菜 สั่งอาหารแผงลอย',
        'LESSON_7': '問路 ถามทาง',
        'LESSON_8': '日／月／年 วัน/เดือน/ปี',
        'LESSON_9': '時間 เวลา',
        'LESSON_10': '祝福 คำอวยพร',
        'LESSON_11': '辦簽證 การทำวีซ่า',
        'LESSON_12': '訂機票 จองตั๋วเครื่องบิน',

        'OTHERS': '其他',
        'TRANSLATION': '泰中傳譯，泰文校對，泰中翻譯。',
        'TRANSLATION_DESCRIPTION': '可電郵聯絡，免費報價。',

        'TEACHER': 'ครูเอก（老师Ek）',
        'TEACHER_DESCRIPTION': '80後、泰國出生的華僑，小時受泰國教育，中學回國讀書，因此精通中泰兩語。因為絕大部分泰國朋友也一樣屬80後，所以熟悉當下流行用語，不只會書上『正統』語言。',

        'FORM_DESCRIPTION': '有任何問題，歡迎和我們聯繫！',
        'NAME': '名稱',
        'EMAIL': '電郵',
        'PHONE': '電話號碼',
        'CONTENT': '查詢內容',
        'SEND': '發送',
        'CLEAR': '清空',

        'CONTACT_US': '聯絡我們',
        'MAIL_RECEIVED': '電郵已經收到，我們會盡快回复！',
        'ANY_QUESTIONS': '有什麼疑問嗎？我們很樂意為您解答！',
        'SORRY_FULL': '對不起，我們現在的上課時間已滿。若您有任何查詢請發郵件聯繫我們，謝謝！'
      })
      .translations('zh_CN', {
        'TRADITIONAL_CHINESE': '繁',
        'SIMPLIFIED_CHINESE': '简',
        'THAI': '泰',
        'HONG_KONG': 'Hong Kong 香港',
        'SITE_TITLE': 'Thai in HK 泰文班 • 香港',
        'SITE_SUBTITLE': '一起轻松学泰文',
        'SITE_DESCRIPTION_1': '拜访曼谷四面佛、到布吉滑浪、在苏梅岛的长滩上撑一把太阳伞，来一个椰青，远离城市烦嚣，是不少人下个假期的计划吧？ ',
        'SITE_DESCRIPTION_2': '还是，你打算出走南泰小村，一探原始泰国风貌？ ',
        'SITE_DESCRIPTION_3': '无论如何，一口流利的泰文都是你旅游旁身必然选择！ ',
        'SITE_DESCRIPTION_4': '跟书本一字一句听说读写？ Out 了！学语文，当然要找地道80 后，从听讲开始，短时间掌握真正沟通的技巧吧！ ',
        'SITE_DESCRIPTION_5': '想要畅游泰国，快报名学泰文喇！ ',

        'THAI_CLASS': '泰语班',
        'FULL': '已满',
        'INDIVIDUAL_CLASS': '个人课程',
        'INDIVIDUAL_CLASS_DESCRIPTION': '可根据原有的程度调节课程难度和进度，不用怕跟不上其他同学而失去信心。可以自选上课时间及地点，方便安排课程时间。 ',
        'INDIVIDUAL_CLASS_PRICE': '学费：$ 300／堂（1.5 小时）。',

        'GROUP_CLASS': '小组课程（2-5人）',
        'GROUP_CLASS_DESCRIPTION': '有朋友陪伴可以增添乐趣，多些互动，又可以有更多对话练习的机会。',
        'GROUP_CLASS_PRICE': '学费：$ 200／堂（1.5 小时）。',

        'TRAVELLING_CLASS': '旅游泰语课程',
        'SPEAKING_CLASS': '口语班',
        'NEW': '新',
        'SPEAKING_CLASS_DESCRIPTION': '跳过读写，只学听读。专注于旅日常用语，以备到泰国旅行可派上用场，在陌生的国度没有后顾之忧。 ',
        'SPEAKING_CLASS_PRICE': '学费：（个人）$ 300／堂（1.5 小时），（小组）$ 200／堂（1.5 小时）。',
        'TOTAL_LESSONS': '共 12 堂课',
        'LESSON_1': '问候语 ทักทาย',
        'LESSON_2': '你电话号码几号？ โทรศัพท์คุณเบอร์อะไร',
        'LESSON_3': '买东西 ซื้อของ',
        'LESSON_4': '能给我一个折扣吗？ ลดราคาหน่อยได้ไหม',
        'LESSON_5': '量词与颜色ลักษณะนามและสีสัน',
        'LESSON_6': '在路边摊点菜สั่งอาหารแผงลอย',
        'LESSON_7': '问路 ถามทาง',
        'LESSON_8': '日／月／年วัน/เดือน/ปี',
        'LESSON_9': '时间 เวลา',
        'LESSON_10': '祝福 คำอวยพร',
        'LESSON_11': '办签证การทำวีซ่า',
        'LESSON_12': '订机票จองตั๋วเครื่องบิน',

        'OTHERS': '其他',
        'TRANSLATION': '泰中传译，泰文校对，泰中翻译。 ',
        'TRANSLATION_DESCRIPTION': '可电邮联络，免费报价。 ',

        'TEACHER': 'ครูเอก（老师Ek）',
        'TEACHER_DESCRIPTION': '80后、泰国出生的华侨，小时受泰国教育，中学回国读书，因此精通中泰两语。因为绝大部分泰国朋友也一样属80后，所以熟悉当下流行用语，不只会书上『正统』语言。',

        'FORM_DESCRIPTION': '有任何问题，欢迎和我们联系！ ',
        'NAME': '名称',
        'EMAIL': '电邮',
        'PHONE': '电话号码',
        'CONTENT': '查询内容',
        'SEND': '发送',
        'CLEAR': '清空',

        'CONTACT_US': '联络我们',
        'MAIL_RECEIVED': '电邮已经收到，我们会尽快回复！ ',
        'ANY_QUESTIONS': '有什么疑问吗？我们很乐意为您解答！ ',
        'SORRY_FULL': '对不起，我们现在的上课时间已满。若您有任何查询请发邮件联系我们，谢谢！'
      });
      $translateProvider.preferredLanguage('zh_TW');
      $translateProvider.useCookieStorage();

      if (['127.0.0.1', '33.33.33.10'].indexOf(location.hostname) === -1) {
        $logProvider.debugEnabled(false);
      }

  })
  ;
