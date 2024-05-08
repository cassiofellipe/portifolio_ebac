import Titulo from "../../components/Titulo"
import Paragrafo from "../../components/Paragrafo"
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo='secundario'>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus unde et,
      exercitationem quam corporis provident dolor commodi aspernatur, eaque nulla
      fugit necessitatibus! Accusantium, rerum veniam officiis minima fuga aperiam accusamus?
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=cassiofellipe&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"/>
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=cassiofellipe&layout=compact&langs_count=7&theme=dracula"/>
    </GithubSecao>
  </section>
)


export default Sobre
