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
