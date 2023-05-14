import logo from './logo.svg';
import './App.scss';

const Block_1 = () =>
            <div class="Block_1">
                <img class="Picture_1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJrUGsaiQBXZYQ8rjCh_oGQcNUtduMiwl1oTuwBH-P&s" alt="Picture_1" width="80px" height="80px"/>
                <p class="title">Lorem ipsum dolor sit amet.</p>
                <p class="text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur rem possimus blanditiis atque recusandae error amet minus eum at accusamus? Praesentium illum soluta quod quo a porro debitis, maiores quam.</p>
                <p class="button">Go</p>
            </div>
const Aside_1 = () => 
  <aside class="aside_1">
    <p>Aside 1</p>
  </aside>
const Aside_2 = () => 
  <aside class="aside_2">
    <p>Aside 2</p>
  </aside>

function App() {
  return (
    <main>
    <Aside_1/>
    <div class="main_center">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus repudiandae eos accusamus natus, accusantium dolorem hic tempora, placeat numquam culpa qui omnis explicabo ratione. Dignissimos perferendis ullam labore delectus soluta?</p>
        <p class="Work">Our work</p>
        <div class="Content">
            <Block_1/>
            <Block_1/>
            <Block_1/>
            <Block_1/>
            <Block_1/>
            <Block_1/>
        </div>
    </div>
    <Aside_2/>
</main>
  );
}

export default App;
