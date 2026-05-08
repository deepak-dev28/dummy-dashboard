export interface User {
  id: number;
  name: string;
  age: number;
  gender: string;
}

export interface AddUserModalProps {
  show: boolean;
  onClose: () => void;
  onSave: (user: User) => void;
  editUser?: User | null;
}
