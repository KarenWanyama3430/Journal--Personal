const { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity } = require('typeorm');
const { User } = require('./User');

@Entity()
class Journal extends BaseEntity {
  @PrimaryGeneratedColumn()
  id;

  @Column()
  title;

  @Column()
  content;

  @Column()
  category;

  @Column()
  date;

  @ManyToOne(() => User, user => user.journals)
  user;
}

module.exports = { Journal };
