import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn({ type: 'int', unsigned: true })
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  name: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  surname: string;

  @Column({ type: 'varchar', length: 255, nullable: true, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  password: string;

  @Column({ type: 'varchar', nullable: true, name: 'profileImage' })
  profileImage: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  access_token: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  roles: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  first_name: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  last_name: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  phone: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  address: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  city: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  country: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  zip: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  company: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  website: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  avatar: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  status: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  created_at: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  updated_at: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  deleted_at: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  created_by: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  updated_by: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  deleted_by: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  version: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  meta: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  token: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  token_expiration: string;
}
