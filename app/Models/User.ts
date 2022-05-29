import { DateTime } from "luxon";
import { BaseModel, column, HasMany, hasMany } from "@ioc:Adonis/Lucid/Orm";
import Sale from "./Sale";

export default class User extends BaseModel {
  @hasMany(() => Sale)
  public sales: HasMany<typeof Sale>;

  @column({ isPrimary: true })
  public id: number;

  @column()
  public admin: boolean;

  @column()
  public name: string;

  @column()
  public address: string;

  @column()
  public email: string;

  @column()
  public username: string;

  @column()
  public password: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
