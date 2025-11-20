import Link from 'next/link'
import { fetchMockData } from '../public/data-fetch'

export default async function Page() {
  const mockData = await fetchMockData();
  const animals = mockData.animaux;

  const getOwner = (proprietaire_id: number) => {
    return mockData.proprietaires.find(owner => owner.id === proprietaire_id)
  }

  return (
    <div className='container'>
      {animals.map(animal => {
        const proprio = getOwner(animal.proprietaire_id);
        return (
          <div key={animal.id} className='card'> 
            <Link key={animal.id} href={`/animal/${animal.id}`}>
              <div className='card-content'>
                {animal.photo && (
                  <img src={animal.photo} className='profilephoto' alt={animal.nom} />
                )}
                <div className='card-info'>
                  <h2>{animal.nom} 🐾</h2>
                    <div>
                      <p><strong>Espèce:</strong> {animal.espece} ({animal.race})</p>
                      <p><strong>Sexe:</strong> {animal.sexe === 'M' ? 'Mâle' : 'Femelle'}</p>
                      <p><strong>Propriétaire:</strong> {proprio?.prenom} {proprio?.nom}</p>
                      {animal.vaccinations && animal.vaccinations.length > 0 && (
                        <p><strong>Vaccination:</strong> {animal.vaccinations.map(v => v.nom).join(', ')}</p>
                      )}
                    </div>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  )
}