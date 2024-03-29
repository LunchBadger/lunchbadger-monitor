import Metric from 'models/Metric';
import MetricBundle from 'models/MetricBundle';
import MetricPair, {OR} from 'models/MetricPair';

const {dispatch} = LunchBadgerCore.dispatcher.AppDispatcher;

export default (entity, left, top) => {
  dispatch('CreateMetric', {
    metric: MetricBundle.create({
      pairs: [
        MetricPair.create({
          metricOne: Metric.create({entity}),
          type: OR
        })
      ],
      left: left || 0,
      top: top || 0
    })
  });
}
