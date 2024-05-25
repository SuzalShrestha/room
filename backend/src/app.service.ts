import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `
    Welcome to the Room Rental API! 🎉

    Need a place to crash? 🛏️ 
    We've got rooms so cozy, even Goldilocks would approve! 🐻

    Whether you're a student, a worker, or just need a hideaway from your crazy roommate, we've got you covered. 🏠

    Dive into our endpoints and find your perfect room. Just don't blame us if you get too comfortable! 😉

    Remember, if something goes wrong, it's not a bug – it's an undocumented feature! 🐛✨

    Happy room hunting! 🚀
  `;
  }
}
