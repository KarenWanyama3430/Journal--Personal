const { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } = require('typeorm');
const { Journal } = require('./Journal');

@Entity()
class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id;

  @Column()
  username;

  @Column()
  password;

  @OneToMany(() => Journal, journal => journal.user)
  journals;
}

module.exports = { User };
