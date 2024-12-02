import { Router } from 'express';
import { apiService } from '../services/apiService';

const router = Router();

router.get('/external-data', async (req, res) => {
  try {
    const data = await apiService.getData('https://api.example.com/data');
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});


export default router;