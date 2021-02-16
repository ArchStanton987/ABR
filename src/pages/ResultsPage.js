import Section from '../components/Section'
import './resultsPage.css'

export default function ResultsPage() {
  return (
    <article>
      <Section>
        <h3>2021 - Assetto Corsa Competizione</h3>
        <ul className="results-list">
          <li>
            <p>
              <strong>3ème</strong> - ACR GT4 World Tour (PRO) - BMW M4
            </p>
          </li>
          <li>
            <p>
              <strong>1er</strong> - ITT 24h for Anna - Suzuka - AMR V8 - Alban Bouquet / Jules Sky
              / Pierre Moulin / Maxime Batifoulier
            </p>
          </li>
        </ul>
        <h3>2020 - Assetto Corsa Competizione</h3>
        <ul className="results-list">
          <li>
            <p>
              <strong>1er</strong> - Hanny 24h de Spa - Spa-Francorchamps - BMW M6 - Alban Bouquet /
              Jules Sky / Nizar El Haddad / Pierre Moulin
            </p>
          </li>
          <li>
            <p>
              <strong>1er</strong> - ITT / HCR 6h de Kyalami - Kyalami - Honda NSX EVO - Alban
              Bouquet / Pierre Moulin
            </p>
          </li>
          <li>
            <p>
              <strong>2ème</strong> - AIR 4h de Barcelone - Barcelone - Porsche Cup - Alban Bouquet
              / Pierre Moulin
            </p>
          </li>
        </ul>
      </Section>
    </article>
  )
}
