import axios from 'axios';

export const getGeometriasBairros = async () => {
  try {
    const response = await axios.get('./geometrias_bairros.json');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const getPopulacaoBairros = async () => {
  try {
    const response = await axios.get('./populacao_bairros.json');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
