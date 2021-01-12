// import logo from './logo.svg';
import "./App.css";
import HeaderBlock from "./components/HeaderBlock/HeaderBlock";
import Header from "./components/Header/index";
import Paragraph from "./components/Paragraph/index";
import FooterBlock from "./components/FooterBlock/FooterBlock";
import MainBlock from "./components/MainBlock/MainBlock";


const App = () => {
  return (
    <>
      <HeaderBlock>
        <Header>Самый быстрый способ выучить язык</Header>
        <Paragraph>
        Иметь большой английский словарный запас жизненно необходимо. Ведь для того, чтобы понимать собеседника, даже грамматика не так важна, как достаточный словарный запас. То же касается и общения. Вас поймут, если вы ошибетесь во времени глагола, например, но если вы не можете сказать какое-то конкретное слово, то это уже значительно утяжелит общение.

Рекомендуем взять на заметку список английских слов для изучения из данной статьи, который пригодятся в самых распространенных жизненных ситуациях.

Чтобы учить английские слова быстро и эффективно, можно использовать знакомые всем карточки, метод ассоциаций,специальные онлайн-уроки и программы.
        </Paragraph>
      </HeaderBlock>
   <MainBlock />
    <FooterBlock/>
      
     
    </>
  );
};

export default App;
