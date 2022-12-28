import {RESTDataSource} from '@apollo/datasource-rest';

export class JsonPlaceHolderAPI extends RESTDataSource {
  override baseURL = 'https://jsonplaceholder.typicode.com/';

  async getPost(): Promise<any> {
    return this.get<any>(`posts`);
  }

  async getPostById(id: number): Promise<any> {
    return this.get<any>(`posts/${id}`);
  }

  async getComments(): Promise<any> {
    return this.get<any>(`comments`);
  }

  async getCommentsById(id: number): Promise<any> {
    return this.get<any>(`comments/${id}`);
  }

  async getAlbums(): Promise<any> {
    return this.get<any>(`albums`);
  }

  async getAlbumsById(id: number): Promise<any> {
    return this.get<any>(`albums/${id}`);
  }

  async getPhotos(): Promise<any> {
    return this.get<any>(`photos`);
  }

  async getPhotosById(id: number): Promise<any> {
    return this.get<any>(`photos/${id}`);
  }

  async getTodos(): Promise<any> {
    return this.get<any>(`todos`);
  }

  async getTodosById(id: number): Promise<any> {
    return this.get<any>(`todos/${id}`);
  }

  async getUsers(): Promise<any> {
    return this.get<any>(`users`);
  }

  async getUsersById(id: number): Promise<any> {
    return this.get<any>(`users/${id}`);
  }
}
