import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()  // Ao passar parametro,a tabela é renomeada. Ex.: ('coffees') 
export class Coffee {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    brand: string;

    @Column('json', { nullable: true })
    flavors: string[];
}