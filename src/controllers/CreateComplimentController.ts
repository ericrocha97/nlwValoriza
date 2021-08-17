import { Request, Response } from "express";
import { CreateComplimentService } from "../services/CreateComplimentService";

class CreateComplimentController {
  async handle(request: Request, response: Response) {
    const { message, tag_id, user_receiver, user_sender } = request.body;

    const createComplimentService = new CreateComplimentService();

    const compliment = await createComplimentService.execute({
      message,
      tag_id,
      user_receiver,
      user_sender,
    });

    return response.status(200).json(compliment);
  }
}

export { CreateComplimentController };
