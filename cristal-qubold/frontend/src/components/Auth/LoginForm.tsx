import { Component } from 'solid-js';
import { User } from '../../types/User';

interface LoginFormProps {
  onLogin: (user: User) => void;
}