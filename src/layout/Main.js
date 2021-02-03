import Section from '../components/Section'
import '../layout.css'

export default function Main() {
  return (
    <main>
      <Section>
        <h3>Vos setups personnalisés sur Assetto Corsa Competizione</h3>
        <p>
          Bienvenue sur Alban Bouquet Racing, je vous propose ici mes services pour réaliser des
          Setups personnalisés à votre conduite, sur Assetto Corsa Competizione.{' '}
        </p>
      </Section>
      <Section>
        <h3>Forfaits</h3>
        <p>Trois forfaits vous sont proposés :</p>
      </Section>
      <Section>
        <h3>Pré-requis</h3>
        <ul>
          <li>
            <p>Avoir installé le logiciel Motec et savoir ouvrir un fichier de télémétrie.</p>
          </li>
          <li>
            <p>Avoir l’application Discord</p>
          </li>
        </ul>
        <p>
          Si vous n’êtes pas du tout familier avec Motec,{' '}
          <a href="https://www.youtube.com/watch?v=ltIzj30gcTM" target="blank">
            vous pouvez suivre ce tutoriel
          </a>
          .{' '}
        </p>
      </Section>
      <Section>
        <h3>Déroulement d'une session</h3>
        <ul>
          <li>
            <p>
              Vous choisissez le combo de votre choix (circuit / voiture), les conditions (sec,
              humide, détrempé) et les circonstantes (hotlap, course, endurance, sprint).
            </p>
          </li>
          <li>
            <p>Vous effectuez des tours sur le combo choisi.</p>
          </li>
          <li>
            <p>J’observe et analyse le comportement de votre voiture.</p>
          </li>
          <li>
            <p>Vous donnez votre ressenti sur le comportement de la voiture.</p>
          </li>
          <li>
            <p>
              A partir de votre fichier de télémétrie, nous élaborons votre setup durant environ 1h.
            </p>
          </li>
        </ul>
      </Section>
    </main>
  )
}
