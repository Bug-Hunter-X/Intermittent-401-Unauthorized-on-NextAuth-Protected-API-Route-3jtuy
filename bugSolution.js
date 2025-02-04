```javascript
import {unstable_getServerSession} from 'next-auth';
import {authOptions} from './auth/[...nextauth]';

export default async function handler(req, res) {
  const session = await unstable_getServerSession(req, res, authOptions);

  if (!session || !session.user || !session.user.email) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  // Access session data safely
  const userEmail = session.user.email;

  // Your protected API route logic here, using userEmail safely
  res.status(200).json({ message: `Success, User Email: ${userEmail}` });
}
```