import { Entity, PrimaryGeneratedColumn, Column, JoinTable, ManyToMany } from "typeorm";
import { Flavor } from "./flavor.entity";

@Entity()  // Ao passar parametro,a tabela é renomeada. Ex.: ('coffees') 
export class Coffee {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    brand: string;

    @Column({ default: 0 })
    recommendations: number;

    @JoinTable()
    @ManyToMany(
        () => Flavor,
        Flavor => Flavor.coffees,
        {
            cascade: true, // ['insert', 'update']
        }
    )
    flavors: Flavor[];
}