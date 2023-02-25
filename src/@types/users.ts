/**
 * This file was automatically generated by joi-to-typescript
 * Do not modify this file manually
 */

export interface IAddUser {
  /**
   * @example raja@gmail.com
   */
  email: string;
  /**
   * @example Raja
   */
  name: string;
  /**
   * @example welcome@123
   */
  password: string;
  /**
   * @example welcome@123
   */
  status?: 'active' | 'inactive';
}

export interface IUser {
  /**
   * @example raja@gmail.com
   */
  email: string;
  /**
   * @example 63f9ba82a4f3093d9b4a5c0e
   */
  id: string;
  /**
   * @example Raja
   */
  name: string;
  /**
   * @example welcome@123
   */
  password: string;
  /**
   * @example welcome@123
   */
  status?: 'active' | 'inactive';
}
