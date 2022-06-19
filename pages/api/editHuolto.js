import { prisma } from '../db'

export default async (req, res) => {
  const {
    kohde,
    huolto,
    km,
    info
} = req.body;
  try {
    const updateHuolto = await prisma.Huolto.update({
      where: {
        id: parseInt(id),
      },
      data: {
        kohde,
        huolto,
        km,
        info    
      },
    });
    res.status(200).json(updateHuolto);
  } catch (error) {
    res.status(403).json({ err: "Päivityksessä tuli error" });
  }
};