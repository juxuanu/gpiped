import axios from "axios";
import { Regions, StreamItem } from "../models";

export default class PipedService {
  private static baseUrl = "https://" + process.env.INSTANCE_URL_API;
  public static async getTrendingVideos(region?: Regions) {
    return await axios.get<StreamItem[]>(PipedService.baseUrl + "/trending", {
      params: { region: region ?? Regions.ES },
    });
  }
}
