import express from "express"; 
import cors from 'cors';



const app = express();

const PORT = process.env.PORT || 3000;

// Routes
app.use('api/auth', auhRoute);
app.use('/api/user', userRouter);
app.use('/api/cart', cartRouter);
app.use('/api/productos', productRouter);
app.user('/api/payments', paymentRouter);


// Lectura de puert
app.listen(PORT, () => {
  console.log(`🚀 Servidor funcionando en puerto: ${PORT} 🚀`);
})