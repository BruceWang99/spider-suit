import React from 'react'
import { Col, Row } from 'antd';
import './Popup.css';


const Popup: React.FC = () => {
  const handleScenes = (input: string) => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      console.log('tabs', tabs);
      if (tabs[0] && tabs[0].id) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'insert_text', value: input });
      }
    });
  }
  const scenes = [
    [{
      title: '前端开发专家',
      input: '我想让你充当前端开发专家。我将提供一些关于Js、Node等前端代码问题的具体信息，而你的工作就是想出为我解决问题的策略。这可能包括建议代码、代码逻辑思路策略。我的第一个请求是“我需要能够动态监听某个元素节点距离当前电脑设备屏幕的左上角的X和Y轴，通过拖拽移动位置浏览器窗口和改变大小浏览器窗口。”'
    },
    {
      title: 'Linux 终端',
      input: '我想让你充当 Linux 终端。我将输入命令，您将回复终端应显示的内容。我希望您只在一个唯一的代码块内回复终端输出，而不是其他任何内容。不要写解释。除非我指示您这样做，否则不要键入命令。当我需要用英语告诉你一些事情时，我会把文字放在中括号内[就像这样]。我的第一个命令是 pwd'
    }],
    [{
      title: '私人教练',
      input: '我想让你担任私人教练。我将为您提供有关希望通过体育锻炼变得更健康、更强壮和更健康的个人所需的所有信息，您的职责是根据该人当前的健身水平、目标和生活习惯为他们制定最佳计划。您应该利用您的运动科学知识、营养建议和其他相关因素来制定适合他们的计划。我的第一个请求是“我需要帮助为想要减肥的人设计一个锻炼计划。”'
    },
    {
      title: '旅行顾问',
      input: '我想让你做一个旅游指南。我会把我的位置写给你，你会推荐一个靠近我的位置的地方。在某些情况下，我还会告诉您我将访问的地方类型。您还会向我推荐靠近我的第一个位置的类似类型的地方。我的第一个建议请求是“我在上海，我只想参观博物馆。”'
    }],
    [{
      title: '英语翻译',
      input: '下面我让你来充当翻译家，你的目标是把任何语言翻译成中文，请翻译时不要带翻译腔，而是要翻译得自然、流畅和地道，使用优美和高雅的表达方式。请翻译下面这句话：“how are you ?”'
    },
    {
      title: '厨师',
      input: '我需要有人可以推荐美味的食谱，这些食谱包括营养有益但又简单又不费时的食物，因此适合像我们这样忙碌的人以及成本效益等其他因素，因此整体菜肴最终既健康又经济！我的第一个要求——“一些清淡而充实的东西，可以在午休时间快速煮熟”'
    }],

  ]
  return (
    <div className="App">
      {
        scenes.map(([item1, item2]) => {
          return (<Row>
            <Col span={12}>
              <div className='scene-box' onClick={() => handleScenes(item1.input)}>
                {item1.title}
              </div>
            </Col>
            <Col span={12}>
              <div className='scene-box' onClick={() => handleScenes(item2.input)}>
                {item2.title}
              </div>
            </Col>
          </Row>)
        })
      }
    </div>
  );
};

export default Popup;
