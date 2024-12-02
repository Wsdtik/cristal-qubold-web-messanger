import { Request, Response } from 'express';
import { Note } from '../models/Note';

export class NoteController {
    static async createNote (req: Request, res: Response) {
        const { title, content } = req.body;

        try {
            const note = Note.create({ title, content });
            await (await note).save();
            res.status(201).json(note);
        } catch (err) {
            res.status(500).json({ message: 'Error creating note' });
        }
    }
}

