interface Proprietaire {
  id: number;
  nom: string;
  prenom: string;
  telephone: string;
  email: string;
}

interface Vaccination {
  nom: string;
  date: string;
  rappel: string;
}

interface HistoriqueEntry {
  date: string;
  motif: string;
  notes: string;
}

interface Animal {
  id: number;
  nom: string;
  espece: string;
  race: string;
  date_naissance: string;
  poids: number;
  sexe: string;
  allergies: string | null;
  photo: string;
  proprietaire_id: number;
  vaccinations: Vaccination[];
  historique: HistoriqueEntry[];
}

interface MockData {
  proprietaires: Proprietaire[];
  animaux: Animal[];
}

export async function fetchMockData(): Promise<MockData> {
  try {
    const response = await fetch('http://localhost:3000/data/mockData.json');
    
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }
    
    const data: MockData = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching mock data:', error);
    throw error;
  }
}

