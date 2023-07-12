import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const comparePasswords = (password, hash) => {
  return bcrypt.compare(password, hash);
};

export const hashPassword = (password) => {
  return bcrypt.hash(password, 5);
};

export const createJWT = (newcompany) => {
  const token = jwt.sign(
    {
      id: newcompany.id,
      username: newcompany.username,
    },
    process.env.JWT_SECRET_C
  );

  return token;
};

// Auth middleware
export const comProtect = (req, res, next) => {
  const bearer = req.headers.authorization;

  if (!bearer) {
    res.status(400);
    res.json({ message: "Authorization header is missing" });
    return;
  }

  const [, token] = bearer.split(' ');

  if (!token) {
    res.status(400);
    res.json({ message: "token not found" });
    return;
  }

  try {
    const company = jwt.verify(token, process.env.JWT_SECRET_C);
    req.company = company;
    next();
  } catch (e) {
    console.error(e);
    res.status(400);
    res.json({ message: "Invalid token" });
    return;
  }
};
